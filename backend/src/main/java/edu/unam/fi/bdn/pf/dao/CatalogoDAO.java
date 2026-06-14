package edu.unam.fi.bdn.pf.dao;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.model.Sorts;
import com.mongodb.client.model.Filters;
import edu.unam.fi.bdn.pf.entity.Album;
import edu.unam.fi.bdn.pf.entity.Artista;
import edu.unam.fi.bdn.pf.entity.Cancion;
import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Repository;

import javax.print.Doc;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;

@Repository
public class CatalogoDAO {
    private MongoCollection<Document> albums() {
        return MongoConnectionManager.getDatabase().getCollection("albums");
    }
    private MongoCollection<Document> songs() {
        return MongoConnectionManager.getDatabase().getCollection("songs");
    }
    private MongoCollection<Document> artists() {return MongoConnectionManager.getDatabase().getCollection("artists");
    }

    // Para albumes
    public List<Album> buscarAlbumes(String query) {
        // crear la regex para busquedas como rock, Rock, RoCKs, etc
        Pattern regex = Pattern.compile(query, Pattern.CASE_INSENSITIVE);
        MongoCursor<Document> cursor = albums().find(
                Filters.or(
                        Filters.regex("title", regex),
                        Filters.regex("artist_name", regex)
                )
        ).limit(20).iterator(); // limitamos para que no jale todos los albumes recien escribas una letra

        List<Album> result = new ArrayList<>();
        while (cursor.hasNext()) { result.add(docToAlbum(cursor.next())); }
        cursor.close();
        return result;
    }

    public List<Artista> buscarArtistas(String query) {
        Pattern regex = Pattern.compile(query, Pattern.CASE_INSENSITIVE);

        MongoCursor<Document> cursor = artists().find(
                Filters.regex("name", regex)
        ).limit(20).iterator();

        List<Artista> result = new ArrayList<>();
        while (cursor.hasNext()) {
            /* * Se reutiliza el mapeo inverso con docToArtista
             * Se pasa una lista vacía como segundo parámetro (para le top 5 de canciones) para evitar
             * realizar operaciones de lectura innecesarias hacia la colección de canciones
             * durante una búsqueda general, asi no saturamos red
             */
            result.add(docToArtista(cursor.next(), new ArrayList<>()));
        }
        cursor.close();
        return result;
    }

    public Optional<Artista> findArtistaById(String id) {
        ObjectId artistObjectId = new ObjectId(id);

        // obtenemos el documento base del artista
        Document docArtista = artists().find(
                Filters.eq("_id", artistObjectId)
        ).first();

        // no se encontró al artista en la búsqueda
        if (docArtista == null) { return Optional.empty(); }

        // si sí se obtuvo el artista, se obtiene el top 5 de canciones desde la colección songs
        MongoCursor<Document> cursorCanciones = songs().find(
                        Filters.eq("artist_id", artistObjectId)
                )
                .sort(Sorts.descending("average_users_score"))      // ordenamos de mayor a menor
                .limit(5)       // solo las 5 mejor calificadas
                .iterator();

        // ya tenemos las canciones en un cursor, lo recorremos para llenar la lista de canciones
        // esto es para construir posteriormente el objeto Artista
        List<Artista.CancionItem> topSongs = new ArrayList<>();
        while (cursorCanciones.hasNext()) {
            // docCancion: canción recuperada del cursor
            Document docCancion = cursorCanciones.next();

            double score = 0.0;
            if (docCancion.get("average_users_score") != null)
                score = ((Number) docCancion.get("average_users_score")).doubleValue();

            // se agrega la canción recuperada en el cursor
            topSongs.add(Artista.CancionItem.builder()
                    .songId(docCancion.getObjectId("_id").toHexString())
                    .songName(docCancion.getString("name"))
                    .duration(docCancion.getInteger("duration", 0))
                    .averageScore(score)
                    .build());
        }
        cursorCanciones.close();

        // armamos la entidad pasando el documento base y la nueva lista
        return Optional.of(docToArtista(docArtista, topSongs));
    }


    // Optional porque puede o no existir el album
    public Optional<Album> findAlbumById(String id) {
        Document doc = albums().find(
                Filters.eq("_id", new ObjectId(id))
        ).first();
        return doc == null ? Optional.empty() : Optional.of(docToAlbum(doc));
    }

    // Para el rating (ahorita en mongo pero deberia ser cassandra, solo es test ahorita)
    /*public void agregarCalificacionAlbum(String albumId, int valor) {
        albums().updateOne(
                Filters.eq("_id", new ObjectId(albumId)),
                new Document("$inc", new Document("rating_total", valor).append("rating_count", 1))
        );
    }

    public Optional<Double> getPromedioAlbum(String albumId) {
        Document doc = albums().find(
                Filters.eq("_id", new ObjectId(albumId))
        ).first();
        if (doc == null) { return Optional.empty(); }
        int total = doc.getInteger("rating_total", 0);
        int count = doc.getInteger("rating_count", 0);
        if (count == 0) return Optional.of(0.0);
        return Optional.of((double) total / count);
    }*/

    public double agregarCalificacionYObtenerPromedio(String albumId, int valor) {
        // $inc acumula total y conteo en el documento del álbum
        albums().updateOne(
                Filters.eq("_id", new ObjectId(albumId)),
                new Document("$inc", new Document("rating_total", valor)
                        .append("rating_count", 1))
        );
        // Recalculamos el promedio con los nuevos valores
        Document doc = albums().find(
                Filters.eq("_id", new ObjectId(albumId))
        ).first();

        if (doc == null) return 0.0;
        int total = doc.getInteger("rating_total", 0);
        int count = doc.getInteger("rating_count", 0);
        return count > 0 ? (double) total / count : 0.0;
    }

    // Para canciones
    public List<Cancion> buscarCanciones(String query) {
        Pattern regex = Pattern.compile(query, Pattern.CASE_INSENSITIVE);
        MongoCursor<Document> cursor = songs().find(
                Filters.or(
                        Filters.regex("name",        regex),
                        Filters.regex("artist_name", regex),
                        Filters.regex("album_name",  regex)
                )
        ).limit(20).iterator();

        List<Cancion> result = new ArrayList<>();
        while (cursor.hasNext()) result.add(docToCancion(cursor.next()));
        cursor.close();
        return result;
    }

    public Optional<Cancion> findCancionById(String id) {
        Document doc = songs().find(
                Filters.eq("_id", new ObjectId(id))
        ).first();
        return doc == null ? Optional.empty() : Optional.of(docToCancion(doc));
    }

    public List<Cancion> findCanciones(List<String> ids) {
        List<ObjectId> objectIds = ids.stream().map(ObjectId::new).toList();
        MongoCursor<Document> cursor = songs().find(
                Filters.in("_id", objectIds)
        ).iterator();
        List<Cancion> result = new ArrayList<>();
        while (cursor.hasNext()) result.add(docToCancion(cursor.next()));
        cursor.close();
        return result;
    }

    // Para mappear de un doc a nuestras entidades
    private Album docToAlbum(Document doc) {
        List<Document> rawTracklist = doc.getList("tracklist", Document.class);
        List<Album.TrackItem> tracklist = new ArrayList<>();
        if (rawTracklist != null) {
            for (Document t : rawTracklist) {
                tracklist.add(Album.TrackItem.builder()
                        .songId(t.getObjectId("song_id").toHexString())
                        .songName(t.getString("song_name"))
                        .duration(t.getInteger("duration", 0))
                        .build());
            }
        }

        int total = doc.getInteger("rating_total", 0);
        int count = doc.getInteger("rating_count", 0);
        double avg = count > 0 ? (double) total / count : 0.0;

        return Album.builder()
                .id(doc.getObjectId("_id").toHexString())
                .title(doc.getString("title"))
                .releaseYear(doc.getInteger("release_year", 0))
                .photo(doc.getString("photo"))
                .artistId(doc.getObjectId("artist_id").toHexString())
                .artistName(doc.getString("artist_name"))
                .totalSongs(doc.getInteger("total_songs", 0))
                .albumDuration(doc.getInteger("album_duration", 0))
                .tracklist(tracklist)
                .averageScore(avg)
                .build();
    }

    private Cancion docToCancion(Document doc) {
        return Cancion.builder()
                .id(doc.getObjectId("_id").toHexString())
                .name(doc.getString("name"))
                .artistId(doc.getObjectId("artist_id").toHexString())
                .artistName(doc.getString("artist_name"))
                .albumId(doc.getObjectId("album_id").toHexString())
                .albumName(doc.getString("album_name"))
                .albumPhoto(doc.getString("album_photo"))
                .duration(doc.getInteger("duration", 0))
                .averageUsersScore(doc.getInteger("average_users_score") != null
                        ? ((Number) doc.get("average_users_score")).doubleValue() : 0.0)
                .build();
    }

    private Artista docToArtista(Document doc, List<Artista.CancionItem> topSongs){
        List<Document> rawAlbumsList = doc.getList("albums", Document.class);
        List<Artista.AlbumItem> albums = new ArrayList<>();
        if (rawAlbumsList != null){
            for(Document d: rawAlbumsList){
                albums.add(Artista.AlbumItem.builder()
                        .albumId(d.getObjectId("album_id").toHexString())
                        .albumTitle(d.getString("album_title"))
                        .albumYear(d.getInteger("album_year", 0))
                        .albumPhoto(d.getString("album_photo"))
                        .build());
            }
        }

        return Artista.builder()
                .id(doc.getObjectId("_id").toHexString())
                .name(doc.getString("name"))
                .photo(doc.getString("photo"))
                .albums(albums)
                .topSongs(topSongs)
                .build();
    }
}
