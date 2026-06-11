package edu.unam.fi.bdn.pf;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import edu.unam.fi.bdn.pf.dao.MongoConnectionManager;
import org.bson.Document;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;


public class MongoConnectionTest {
    private static MongoDatabase database;

    @BeforeAll
    public static void setUp() {
        // se inicializa la conexión general antes de ejecutar los casos de prueba
        database = MongoConnectionManager.getDatabase();
    }

    @Test
    public void pingMongoDB() {
        Document pingCommand = new Document("ping", 1);
        Document response = database.runCommand(pingCommand);

        // mongoDB responde con { "ok": 1.0 } si el ping fue exitoso
        assertNotNull(response, "La respuesta del comando ping es nula");
        assertEquals(1.0, response.getDouble("ok"),
                "Conexión no exitosa hacia mongodb");
    }

    @Test
    public void testArtistExists() {
        // recuperamos cualquier conexión, en este caso artists
        MongoCollection<Document> artistsCollection = database.getCollection("artists");

        // ejecutamos la consulta
        Document query = new Document("name", "The Beatles");
        Document result = artistsCollection.find(query).first();

        assertNotNull(result, "Documento no encontrado");
        assertEquals("The Beatles", result.getString("name"),
                "No se encontró al artista");
    }

    @AfterAll
    public static void tearDown() {
        MongoConnectionManager.closeConnection();
    }
}

