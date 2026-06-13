package edu.unam.fi.bdn.pf.service;

import edu.unam.fi.bdn.pf.dao.PlaylistDAO;
import edu.unam.fi.bdn.pf.dao.RedisPoolManager;
import edu.unam.fi.bdn.pf.dao.UsuarioDAO;
import edu.unam.fi.bdn.pf.entity.Playlist;
import edu.unam.fi.bdn.pf.entity.Usuario;
import org.springframework.stereotype.Service;
import redis.clients.jedis.Jedis;

import java.util.List;

@Service
public class PlaylistService {
    private final PlaylistDAO playlistDAO;
    private final UsuarioDAO usuarioDAO;

    public PlaylistService(PlaylistDAO playlistDAO, UsuarioDAO usuarioDAO) {
        this.playlistDAO = playlistDAO;
        this.usuarioDAO = usuarioDAO;
    }

    private String obtenerUserID(String sessionId) {
        if (sessionId == null || sessionId.isBlank())
            throw new IllegalArgumentException("No se pudo obtener el token de la sesión");

        try (Jedis jedis = RedisPoolManager.getConnection()) {
            String userId = jedis.get("session:" + sessionId);
            if (userId == null)
                throw new SecurityException("Sesión inválida o expirada");

            return userId; // solo se retorna si Redis confirma que existe
        }
    }

    public Playlist crearPlaylist(String sessionId, String name) {
        // userID obtenido de Redis
        String userId = obtenerUserID(sessionId);

        // recuperamos el usuario de Mongo usando el userID que obtuvimos de Redis
        Usuario usuario = usuarioDAO.getUsuarioById(userId)
                .orElseThrow(() -> new SecurityException("Usuario no encontrado en la base de datos"));

        return playlistDAO.crearPlaylist(name, userId, usuario.getUsername());
    }

    public List<Playlist> obtenerMisPlaylists(String sessionId) {
        String userId = obtenerUserID(sessionId);
        return playlistDAO.obtenerPlaylistsPorUsuario(userId);
    }

    public void agregarCancion(String sessionId, String playlistId, Playlist.PlaylistItem cancion) {
        String userId = obtenerUserID(sessionId);
        // se invoca a la "txn"
        boolean ok = playlistDAO.agregarCancion(playlistId, userId, cancion);

        if (!ok)
            throw new IllegalArgumentException("No se pudo agregar la canción. La playlist no existe o no es del user");

    }
}