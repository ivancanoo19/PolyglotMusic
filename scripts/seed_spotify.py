import requests
import base64
import hashlib
import json
import re

# credenciales obtenidas de spotify dashboard
CLIENT_ID = '3148092e3c194ec88ca83d507a2c6c8d'
CLIENT_SECRET = 'c0c53fdf23894b4da06004ffc9014668'

def generar_object_id(cadena_original):
    """Convierte un ID de Spotify en un ObjectId válido de 24 caracteres (Hexadecimal)"""
    # esto se guarda como objectID en nuestra BD en mongo, muy importante que sea de longitud 24
    hash_md5 = hashlib.md5(cadena_original.encode()).hexdigest()
    return hash_md5[:24]

def get_token():
    """Autentica la aplicación y retorna el Access Token"""
    url = "https://accounts.spotify.com/api/token"

    # spotify exige que las mandemos en base64
    credenciales = f"{CLIENT_ID}:{CLIENT_SECRET}"
    credenciales_b64 = base64.b64encode(credenciales.encode()).decode()

    headers = {
        "Authorization": f"Basic {credenciales_b64}",
        "Content-Type": "application/x-www-form-urlencoded"
    }

    # Cuerpo de la petición, indica el tipo de autorización
    data = {
        "grant_type": "client_credentials"
    }

    # Ejecutamos la petición HTTP POST
    response = requests.post(url, headers=headers, data=data)

    if response.status_code == 200:
        print("- Autenticación exitosa!")
        return response.json()['access_token']
    else:
        print(f"- Error al autenticar: {response.status_code}")
        print(response.json())
        return None

def obtener_albumes_resumen(artista_id_spotify, artista_nombre, token):
    url = f"https://api.spotify.com/v1/artists/{artista_id_spotify}/albums"
    headers = {"Authorization": f"Bearer {token}"}
    params = {"include_groups": "album", "limit": 5, "market": "MX", "offset": 0}

    response = requests.get(url, headers=headers, params=params)

    albumes_para_artista = []       # para hacer embebido al artista
    coleccion_albums = []           # documento final de album
    coleccion_songs = []            # documento final de canciones
    titulos_vistos = set()
    artista_id_mongo = generar_object_id(artista_id_spotify)

    if response.status_code == 200:
        albumes_spotify = response.json().get('items', [])
        for album in albumes_spotify:
            titulo = album['name']
            if titulo.lower() in titulos_vistos:
                continue

            try:
                fecha_limpia = album.get('release_date', '')
                anio = int(fecha_limpia[:4]) if fecha_limpia else 0
            except (ValueError, IndexError):
                anio = 0

            # Extracción de tracks
            doc_album, docs_canciones = obtener_tracks_y_construir_modelos(
                album['id'], titulo, anio, artista_id_mongo, artista_nombre, token
            )

            # Recolectamos los datos para las colecciones independientes
            coleccion_albums.append(doc_album)
            coleccion_songs.extend(docs_canciones)

            # Resumen para el documento de arista, solo lo que nos importa para este doc
            albumes_para_artista.append({
                "album_id": doc_album["_id"],
                "album_title": doc_album["title"],
                "album_year": doc_album["release_year"]
            })
            titulos_vistos.add(titulo.lower())

    return albumes_para_artista, coleccion_albums, coleccion_songs

def obtener_tracks_y_construir_modelos(album_spotify_id, album_titulo, album_anio, artista_id_mongo, artista_nombre, token):
    """Consulta las pistas de un álbum y construye los documentos para MongoDB."""
    url = f"https://api.spotify.com/v1/albums/{album_spotify_id}/tracks"
    headers = {"Authorization": f"Bearer {token}"}
    response = requests.get(url, headers=headers)

    tracklist_embebido = []
    documentos_canciones = []
    duracion_total_album_segundos = 0
    total_canciones = 0
    album_id_mongo = generar_object_id(album_spotify_id)

    if response.status_code == 200:
        tracks_spotify = response.json().get('items', [])
        total_canciones = len(tracks_spotify)

        for track in tracks_spotify:
            cancion_id_mongo = generar_object_id(track['id'])
            duracion_segundos = track['duration_ms'] // 1000  # Conversión a segundos
            duracion_total_album_segundos += duracion_segundos

            # objeto embebido para el arreglo tracklist del álbum
            tracklist_embebido.append({
                "song_id": cancion_id_mongo,
                "song_name": track['name'],
                "duration": duracion_segundos
            })

            # doc independiente para la colección de songs
            documento_cancion = {
                "_id": cancion_id_mongo,
                "name": track['name'],
                "artist_id": artista_id_mongo,
                "artist_name": artista_nombre,
                "album_id": album_id_mongo,
                "album_name": album_titulo,
                "duration": duracion_segundos,
                "average_users_score": 0.0
            }
            documentos_canciones.append(documento_cancion)

    # doc independiente para la colección albums
    documento_album = {
        "_id": album_id_mongo,
        "title": album_titulo,
        "release_year": album_anio,
        "artist_id": artista_id_mongo,
        "artist_name": artista_nombre,
        "total_songs": total_canciones,
        "album_duration": duracion_total_album_segundos,
        "tracklist": tracklist_embebido
    }

    return documento_album, documentos_canciones


def buscar_artista(nombre_artista, token):
    url = "https://api.spotify.com/v1/search"
    headers = {"Authorization": f"Bearer {token}"}
    params = {"q": nombre_artista, "type": "artist", "limit": 1}

    response = requests.get(url, headers=headers, params=params)

    if response.status_code == 200:
        resultados = response.json()['artists']['items']
        if resultados:
            artista = resultados[0]
            artista_id_spotify = artista['id']
            artista_nombre = artista['name']

            # desempaquetamos los tres conjuntos
            arreglo_albumes, docs_albums, docs_songs = obtener_albumes_resumen(
                artista_id_spotify, artista_nombre, token
            )

            # Construimos el documento para la colección artist
            documento_artista = {
                "_id": generar_object_id(artista_id_spotify),
                "name": artista_nombre,
                "albums": arreglo_albumes
            }

            return documento_artista, docs_albums, docs_songs
        else:
            return None, [], []
    return None, [], []


def formatear_mongo_js(nombre_coleccion, lista_datos):
    """Convierte la lista de diccionarios en sintaxis válida de MongoDB Shell"""
    json_str = json.dumps(lista_datos, indent=4, ensure_ascii=False)

    patron = r'"(_id|artist_id|album_id|song_id)":\s*"([a-f0-9]{24})"'
    reemplazo = r'"\1": ObjectId("\2")'
    json_str = re.sub(patron, reemplazo, json_str)

    return f"db.{nombre_coleccion}.insertMany(\n{json_str}\n);\n\n"

if __name__ == "__main__":
    token = get_token()
    if token:
        artistas_a_buscar = [
            "The Beatles", "Olivia Rodrigo",
            "Arctic Monkeys"
        ]

        todos_artistas = []
        todos_albumes = []
        todas_canciones = []

        print("\n- Iniciando extracción masiva...")
        for nombre in artistas_a_buscar:
            print(f"Procesando: {nombre}...")
            doc_artista, lista_albumes, lista_canciones = buscar_artista(nombre, token)
            if doc_artista:
                todos_artistas.append(doc_artista)
                todos_albumes.extend(lista_albumes)
                todas_canciones.extend(lista_canciones)

        # para generar el nombre del archivo init-mongo.js
        ruta_archivo = "init-mongo-v2.js"

        with open(ruta_archivo, "w", encoding="utf-8") as f:
            # nombre de la BD
            f.write("db = db.getSiblingDB('polyglotmusic');\n\n")

            usuarios_test = """db.users.insertMany([
    { _id: ObjectId("dddddddddddddddddddd0001"), username: "canotest" },
    { _id: ObjectId("dddddddddddddddddddd0002"), username: "edutest" }]);\n\n"""
            f.write(usuarios_test)

            # catalogo musical base
            f.write(formatear_mongo_js("artists", todos_artistas))
            f.write(formatear_mongo_js("albums", todos_albumes))
            f.write(formatear_mongo_js("songs", todas_canciones))

        print(f"\n - Archivo {ruta_archivo} generado con éxito.")
        print(f"Resumen: {len(todos_artistas)} Artistas | {len(todos_albumes)} Álbumes | {len(todas_canciones)} Canciones")