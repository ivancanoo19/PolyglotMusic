package edu.unam.fi.bdn.pf.dao;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import io.github.cdimascio.dotenv.Dotenv;

public class MongoConnectionManager {
    private static final Dotenv dotenv = Dotenv.configure().directory("../").load();
    private static final String CONNECTION_URI = dotenv.get("MONGO_URI");
    private static final String DATABASE_NAME = dotenv.get("MONGO_DATABASE");
    private static MongoClient mongoClient = null;

    // El objeto MongoClient no representa una sola conexión física, sino que administra un pool de conexiones
    public static MongoDatabase getDatabase() {
        if (mongoClient == null) {
            // solo se instancia un objeto por app, no varios
            mongoClient = MongoClients.create(CONNECTION_URI);
        }
        return mongoClient.getDatabase(DATABASE_NAME);
    }

    // cierre controlado
    public static void closeConnection() {
        if (mongoClient != null) {
            mongoClient.close();
            mongoClient = null;
        }
    }
}
