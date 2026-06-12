package edu.unam.fi.bdn.pf.service;

import edu.unam.fi.bdn.pf.dao.UsuarioDAO;
import edu.unam.fi.bdn.pf.dao.RedisPoolManager;
import edu.unam.fi.bdn.pf.dto.AuthResponse;
import edu.unam.fi.bdn.pf.dto.RegisterRequest;
import edu.unam.fi.bdn.pf.entity.Usuario;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import redis.clients.jedis.Jedis;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service // Para crear la instancia del Service automaticamente para el Controller
public class AuthService {
    private final UsuarioDAO usuarioDAO; // Creamos nuestro DAO para comunicarse con Mongo
    private final BCryptPasswordEncoder passwordEncoder;

    public AuthService(UsuarioDAO usuarioDAO, BCryptPasswordEncoder passwordEncoder) {
        this.usuarioDAO = usuarioDAO;
        this.passwordEncoder = passwordEncoder;
    } // Constructor

    public AuthResponse register(RegisterRequest req) {
        // Validaciones
        if (usuarioDAO.existsByEmail(req.getEmail()))
            throw new IllegalArgumentException("El correo ya está registrado");

        if (usuarioDAO.existsByUsername(req.getUsername()))
            throw new IllegalArgumentException("El nombre de usuario ya está en uso");

        // Guardar usuario
        Usuario nuevo = Usuario.builder()
                .email(req.getEmail())
                .username(req.getUsername())
                .password(passwordEncoder.encode(req.getPassword()))
                .createdAt(System.currentTimeMillis())
                .build();

        // Para el login lo dejo aqui
        // boolean ok = passwordEncoder.matches(
        //        passwordIngresada,
        //        usuario.getPassword()
        // );
        Usuario guardado = usuarioDAO.save(nuevo);

        // Crear sesion en Redis con TTL de 2 horas
        String sessionId = UUID.randomUUID().toString();
        try (Jedis jedis = RedisPoolManager.getConnection()) {
            jedis.setex("sesion:" + sessionId, 7200, guardado.getId());
        }

        return new AuthResponse(sessionId, guardado.getUsername(), guardado.getId());
    }
}