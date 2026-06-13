package edu.unam.fi.bdn.pf.dao;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import edu.unam.fi.bdn.pf.entity.Usuario;
import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository // Para crear la instancia del DAO automaticamente, utilizada por Service
public class UsuarioDAO {
    // Conexion y obtencion de la collection para utilizar find, insertOne, etc
    private MongoCollection<Document> users() {
        MongoDatabase db = MongoConnectionManager.getDatabase();
        return db.getCollection("users");
    }

    // Para REGISTER
    public boolean existsByEmail(String email) {
        return users().find(Filters.eq("email", email)).first() != null;
    }

    public boolean existsByUsername(String username) {
        return users().find(Filters.eq("username", username)).first() != null;
    }

    public Usuario save(Usuario usuario) {
        Document doc = new Document()
                .append("email",     usuario.getEmail())
                .append("username",  usuario.getUsername())
                .append("password",  usuario.getPassword())
                .append("createdAt", usuario.getCreatedAt());

        users().insertOne(doc);

        // el _id se genera automaticamente, se devuelve para la sesion en Redis
        usuario.setId(doc.getObjectId("_id").toHexString());
        return usuario;
    }

    // Para LOGIN
    public Optional<Usuario> findByEmailOrUsername(String identifier) {
        Document doc = users().find(
                Filters.or(
                        Filters.eq("email",    identifier),
                        Filters.eq("username", identifier)
                )
        ).first();
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

    public Optional<Usuario> getUsuarioById(String userId) {
        Document doc = users().find(
                Filters.eq("_id", new ObjectId(userId))
        ).first();
        if (doc == null) return Optional.empty();
        return Optional.of(docToUsuario(doc));
    }
}