package edu.unam.fi.bdn.pf.controller;

import edu.unam.fi.bdn.pf.dto.AuthResponse;
import edu.unam.fi.bdn.pf.dto.RegisterRequest;
import edu.unam.fi.bdn.pf.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

// Route handler (endpoint)
@RestController // Definir que esta clase tendra endpoints HTTP
@RequestMapping("/api/auth") // Prefijo para todos los endpoints de la clase
// Para que React pueda hacer peticiones al backend, para no tener errores de CORS
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {
    private final AuthService authService; // Variable de instancia AuthService (reglas de negocio)

    public AuthController(AuthService authService) {
        this.authService = authService;
    } // Definimos el servicio para esta clase (constructor)

    @PostMapping("/register") // Endpoint para registrar usuarios
    public ResponseEntity<?> register(@RequestBody RegisterRequest req) {
        try {
            AuthResponse response = authService.register(req); // Llamamos al servicio y le pasamos los datos
            // Devuelve status code 201 y un JSON proveniente del objeto AuthResponse
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (IllegalArgumentException e) {
            // Por si hay un username o email repetido devuelve status code 409
            // y el JSON {"error": <error>}
            return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("error", e.getMessage()));
        }
    }
}