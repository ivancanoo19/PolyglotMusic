package edu.unam.fi.bdn.pf.dao;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Updates;
import edu.unam.fi.bdn.pf.entity.Playlist;
import org.bson.Document;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Repository
public class PlaylistDAO {
    private MongoCollection<Document> playlists() { return MongoConnectionManager.getDatabase().getCollection("playlists");}

    // metodo para crear una playlist vacía
    public Playlist crearPlaylist(String name, String userId, String username) {
        // se inicializa el nuevo documento con valores por defecto
        Document doc = new Document("name", name)
                .append("user_id", userId)
                .append("username", username)
                .append("created_at", new Date())
                .append("total_songs", 0)
                .append("playlist_duration", 0)
                .append("songs", new ArrayList<Document>()); // notar que el arreglo de canciones está vacío

        // se inserta el documento vacío
        // usamos la instancia sobre la colección playlists obtenida del MongoConnectionManager
        playlists().insertOne(doc);

        // se retorna el objeto de tipo playlist que acabamos de insertar en mongo
        return Playlist.builder()
                .id(doc.getObjectId("_id").toHexString())
                .name(name)
                .userId(userId)
                .username(username)
                .createdAt(doc.getDate("created_at"))
                .totalSongs(0)
                .playlistDuration(0)
                .songs(new ArrayList<>())
                .build();
    }

    // metodo para extraer de manera segura la playlist de un usuario -> por medio de su userId
    // retorna una lista de playlists asociadas al usuario
    public List<Playlist> obtenerPlaylistsPorUsuario(String userId) {
        List<Playlist> resultado = new ArrayList<>();

        // este filtro obliga a mongo a devolver solo documentos que coincidan con este userId
        // usamos el parámetro que recibe este metodo (userID)
        // transformamos el documento obtenido de la consulta en un objeto valido (un objeto playlist)
        for (Document doc : playlists().find(Filters.eq("user_id", userId)))
            resultado.add(docToPlaylist(doc));

        return resultado;
    }

    // transaccion de un solo documento
    public boolean agregarCancion(String playlistId, String userId, Playlist.PlaylistItem cancion) {
        // se define un filtro con doble validación, por objectID y por user_id
        // se debe agregar el operador de negación lógica Filters.ne (Not Equal) sobre la propiedad anidada
        // Esto asegura que se rechace la actualización si el id de la canción ya existe dentro del arreglo
        // es decir, evita duplicados en la misma transaccion
        Bson filtro = Filters.and(
                Filters.eq("_id", new ObjectId(playlistId)),
                Filters.eq("user_id", userId),
                Filters.ne("songs.song_id", cancion.getSongId())
        );

        // preparamos el sub-documento JSON que entrará al arreglo para agregar una canción a la playlist
        Document cancionDoc = new Document("song_id", cancion.getSongId())
                .append("song_name", cancion.getSongName())
                .append("duration", cancion.getDuration())
                .append("song_photo", cancion.getSongPhoto());

        // declaramos los 3 updates que se hacen sobre el mismo documento de playlist
        // añade la cancion al arreglo de canciones de la playlist
        Bson operadorPush = Updates.push("songs", cancionDoc);

        // aumentamos el uno el total, longitud de la playlist
        Bson operadorIncTotal = Updates.inc("total_songs", 1);

        // sumamos la duracion total
        Bson operadorIncDuracion = Updates.inc("playlist_duration", cancion.getDuration());

        // se combinan para ejecutarse en una sola instrucción, es decir, en lugar de 3 comandos por separado
        // se hacen juntos en uno
        // al ejecutarlo, el documento se va a bloquear, ejecuta estas 3 operaciones de manera simultánea y lo libera
        Bson update = Updates.combine(operadorPush, operadorIncTotal, operadorIncDuracion);

        // updateOne devuelve el numero de documentos alterados, si es mayor a cero, fue exitoso
        return playlists().updateOne(filtro, update).getModifiedCount() > 0;
    }

    // transaccion de un solo documento pero ahora para borrar
    public boolean eliminarCancion(String playlistId, String userId, String songId, int duration) {
        // mecanismo inverso utilizando Filters.eq (Equal).
        // el delete solo se ejecutará en si el arreglo contiene actualmente dicha canción, evita que se sobrepase
        // o inconsistencias cuando se vacíe la playlist
        Bson filtro = Filters.and(
                Filters.eq("_id", new ObjectId(playlistId)),
                Filters.eq("user_id", userId),
                Filters.eq("songs.song_id", songId)
        );

        // ahora la operacion es un pull: se saca el elemento donde song_id sea igual al songId recibido
        Bson operadorPull = Updates.pull("songs", new Document("song_id", songId));

        // se restan valores del total y la duracion
        Bson operadorDecTotal = Updates.inc("total_songs", -1);
        Bson operadorDecDuracion = Updates.inc("playlist_duration", -duration);

        // se combinan y ejecutan
        Bson transaccion = Updates.combine(operadorPull, operadorDecTotal, operadorDecDuracion);

        return playlists().updateOne(filtro, transaccion).getModifiedCount() > 0;
    }

    public boolean eliminarPlaylist(String playlistId, String userId) {
        Bson filtro = Filters.and(
                Filters.eq("_id", new ObjectId(playlistId)),
                Filters.eq("user_id", userId)
        );

        return playlists().deleteOne(filtro).getDeletedCount() > 0;
    }

    // para construir un objeto playlist
    private Playlist docToPlaylist(Document doc) {
        List<Document> rawSongs = doc.getList("songs", Document.class);
        List<Playlist.PlaylistItem> songs = new ArrayList<>();

        if (rawSongs != null) {
            for (Document s : rawSongs) {
                songs.add(Playlist.PlaylistItem.builder()
                        .songId(s.getString("song_id"))
                        .songName(s.getString("song_name"))
                        .duration(s.getInteger("duration", 0))
                        .songPhoto(s.getString("song_photo"))
                        .build());
            }
        }

        return Playlist.builder()
                .id(doc.getObjectId("_id").toHexString())
                .name(doc.getString("name"))
                .userId(doc.getString("user_id"))
                .username(doc.getString("username"))
                .createdAt(doc.getDate("created_at"))
                .totalSongs(doc.getInteger("total_songs", 0))
                .playlistDuration(doc.getInteger("playlist_duration", 0))
                .songs(songs)
                .build();
    }
}