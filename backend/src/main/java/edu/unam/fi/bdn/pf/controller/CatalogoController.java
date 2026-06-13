package edu.unam.fi.bdn.pf.controller;

import edu.unam.fi.bdn.pf.entity.Album;
import edu.unam.fi.bdn.pf.entity.Cancion;
import edu.unam.fi.bdn.pf.service.CatalogoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/catalogo")
@CrossOrigin(origins = "http://localhost:5173")
public class CatalogoController {
    private final CatalogoService catalogoService;

    public CatalogoController(CatalogoService catalogoService) {
        this.catalogoService = catalogoService;
    } // nuestro constructor

    @GetMapping("/albumes")
    public ResponseEntity<?> buscarAlbumes(@RequestParam String q) {
        try {
            List<Album> albumes = catalogoService.buscarAlbumes(q);
            return ResponseEntity.ok(albumes);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @GetMapping("/albumes/{id}")
    public ResponseEntity<?> getAlbum(@PathVariable String id) {
        try {
            return ResponseEntity.ok(catalogoService.getAlbum(id));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/canciones")
    public ResponseEntity<?> buscarCanciones(@RequestParam String q) {
        try {
            List<Cancion> canciones = catalogoService.buscarCanciones(q);
            return ResponseEntity.ok(canciones);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @GetMapping("/canciones/{id}")
    public ResponseEntity<?> getCancion(@PathVariable String id) {
        try {
            return ResponseEntity.ok(catalogoService.getCancion(id));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // endpoint para la búsqueda general por nombre (Regex)
    @GetMapping("/artistas")
    public ResponseEntity<?> buscarArtistas(@RequestParam String q) {
        try {
            // Se asume que el metodo buscarArtistas se agregó a CatalogoService
            return ResponseEntity.ok(catalogoService.buscarArtistas(q));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    // Endpoint para obtener el perfil detallado del artista (con sus álbumes y Top 5)
    @GetMapping("/artistas/{id}")
    public ResponseEntity<?> getArtista(@PathVariable String id) {
        try {
            return ResponseEntity.ok(catalogoService.getArtista(id));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }
}