package edu.unam.fi.bdn.pf.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

// Lo utiliza AuthController y AuthService para convertir objeto Java a JSON
@Data
@AllArgsConstructor
public class AuthResponse {
    private String sessionId;
    private String username;
    private String userId;
}