package edu.unam.fi.bdn.pf.controller;

import edu.unam.fi.bdn.pf.dto.CalificacionRequest;
import edu.unam.fi.bdn.pf.dto.ReproduccionRequest;
import edu.unam.fi.bdn.pf.service.ActividadService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/actividad")
@CrossOrigin(origins = "http://localhost:5173")
public class ActividadController {

    private final ActividadService actividadService;

    public ActividadController(ActividadService actividadService) {
        this.actividadService = actividadService;
    }

    @PostMapping("/reproducir")
    public ResponseEntity<?> reproducir(@RequestBody ReproduccionRequest req) {
        try {
            actividadService.reproducir(req);
            return ResponseEntity.ok(Map.of("ok", true));
        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/calificar")
    public ResponseEntity<?> calificar(@RequestBody CalificacionRequest req) {
        System.out.println("AQUIIIII");
        System.out.println(req);
        try {
            actividadService.calificar(req);
            return ResponseEntity.ok(Map.of("ok", true));
        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body(Map.of("error", e.getMessage()));
        }
    }

    @GetMapping("/historial/{usuarioId}")
    public ResponseEntity<?> historial(@PathVariable String usuarioId) {
        try {
            return ResponseEntity.ok(actividadService.obtenerHistorial(usuarioId));
        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body(Map.of("error", e.getMessage()));
        }
    }
}