package edu.unam.fi.bdn.pf.service;

import edu.unam.fi.bdn.pf.dao.PlaylistDAO;
import edu.unam.fi.bdn.pf.dao.SessionDAO;
import edu.unam.fi.bdn.pf.dao.UsuarioDAO;
import edu.unam.fi.bdn.pf.entity.Playlist;
import edu.unam.fi.bdn.pf.entity.Usuario;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlaylistService {
    private final PlaylistDAO playlistDAO;
    private final UsuarioDAO usuarioDAO;
    private final SessionDAO sessionDAO;

    public PlaylistService(PlaylistDAO playlistDAO, UsuarioDAO usuarioDAO, SessionDAO sessionDAO) {
        this.playlistDAO = playlistDAO;
        this.usuarioDAO = usuarioDAO;
        this.sessionDAO = sessionDAO;
    }

    private String obtenerUserID(String sessionId) {
        if (sessionId == null || sessionId.isBlank())
            throw new IllegalArgumentException("No se pudo obtener el token de la sesión");

        // el servicio delega la consulta al DAO en donde verificamos si la sesión es existente
        String userId = sessionDAO.getUserIdBySession(sessionId);

        if (userId == null)
            throw new SecurityException("Sesión inválida o expirada");

        return userId;
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

    public void eliminarCancion(String sessionId, String playlistId, String songId, int duration) {
        String userId = obtenerUserID(sessionId);
        boolean ok = playlistDAO.eliminarCancion(playlistId, userId, songId, duration);

        if (!ok) {
            throw new IllegalArgumentException("No se pudo eliminar la canción. Verifica que la playlist te pertenezca.");
        }
    }

    public void eliminarPlaylist(String sessionId, String playlistId) {
        String userId = obtenerUserID(sessionId);
        boolean ok = playlistDAO.eliminarPlaylist(playlistId, userId);

        if (!ok) {
            throw new IllegalArgumentException("No se pudo eliminar la playlist. Verifica que te pertenezca.");
        }
    }
}