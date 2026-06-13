package edu.unam.fi.bdn.pf.controller;

import edu.unam.fi.bdn.pf.entity.Playlist;
import edu.unam.fi.bdn.pf.service.PlaylistService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/playlists")
@CrossOrigin(origins = "http://localhost:5173")
public class PlaylistController {
    private final PlaylistService playlistService;
    public PlaylistController(PlaylistService playlistService) {
        this.playlistService = playlistService;
    }

    // endpoint para crear una playlist -> POST /api/playlists
    @PostMapping
    public ResponseEntity<?> crearPlaylist(
            @RequestHeader("X-Session-Id") String sessionId,
            @RequestBody Map<String, String> body) {
        try {
            String name = body.get("name");
            return ResponseEntity.ok(playlistService.crearPlaylist(sessionId, name));
        } catch (SecurityException e) {
            return ResponseEntity.status(401).body(Map.of("error", e.getMessage())); // 401 Unauthorized
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage())); // 400 Bad Request
        }
    }

    // endpoint para consultar las playlist de un usuario -> GET /api/playlists
    @GetMapping
    public ResponseEntity<?> obtenerMisPlaylists(
            @RequestHeader("X-Session-Id") String sessionId) {
        try {
            return ResponseEntity.ok(playlistService.obtenerMisPlaylists(sessionId));
        } catch (SecurityException e) {
            return ResponseEntity.status(401).body(Map.of("error", e.getMessage()));
        }
    }

    // endpoint para agregar una canncion a la playlist -> POST /api/playlists/{id}/canciones
    @PostMapping("/{id}/canciones")
    public ResponseEntity<?> agregarCancion(
            @RequestHeader("X-Session-Id") String sessionId,
            @PathVariable String id,
            @RequestBody Playlist.PlaylistItem cancion) {
        try {
            playlistService.agregarCancion(sessionId, id, cancion);
            return ResponseEntity.ok(Map.of("mensaje", "Canción agregada exitosamente"));
        } catch (SecurityException e) {
            return ResponseEntity.status(401).body(Map.of("error", e.getMessage()));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }
}