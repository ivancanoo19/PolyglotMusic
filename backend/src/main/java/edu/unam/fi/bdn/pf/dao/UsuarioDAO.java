package edu.unam.fi.bdn.pf.dao;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import edu.unam.fi.bdn.pf.entity.Usuario;
import org.bson.Document;1
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository // Para crear la instancia del DAO automaticamente, utilizada por Service
public class UsuarioDAO {
    // Conexion y obtencion de la collection para utilizar find, insertOne, etc
    private MongoCollection<Document> collection() {
        MongoDatabase db = MongoConnectionManager.getDatabase();
        return db.getCollection("users");
    }

    // Para REGISTER
    public boolean existsByEmail(String email) {
        return collection().find(Filters.eq("email", email)).first() != null;
    }

    public boolean existsByUsername(String username) {
        return collection().find(Filters.eq("username", username)).first() != null;
    }

    public Usuario save(Usuario usuario) {
        Document doc = new Document()
                .append("email",     usuario.getEmail())
                .append("username",  usuario.getUsername())
                .append("password",  usuario.getPassword())
                .append("createdAt", usuario.getCreatedAt());

        collection().insertOne(doc);

        // el _id se genera automaticamente, se devuelve para la sesion en Redis
        usuario.setId(doc.getObjectId("_id").toHexString());
        return usuario;
    }

    // Para LOGIN
    public Optional<Usuario> findByEmail(String email) {
        Document doc = collection().find(Filters.eq("email", email)).first();
        if (doc == null) return Optional.empty();
        return Optional.of(docToUsuario(doc));
    }

    public Optional<Usuario> findByUsername(String username) {
        Document doc = collection().find(Filters.eq("username", username)).first();
        if (doc == null) return Optional.empty();
        return Optional.of(docToUsuario(doc));
    }

    // Lo que devuelve Mongo (JSON) a un objeto Java
    private Usuario docToUsuario(Document doc) {
        return Usuario.builder()
                .id(doc.getObjectId("_id").toHexString())
                .email(doc.getString("email"))
                .username(doc.getString("username"))
                .password(doc.getString("password"))
                .createdAt(doc.getLong("createdAt"))
                .build();
    }
}