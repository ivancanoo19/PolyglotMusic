package edu.unam.fi.bdn.pf.dto;

import lombok.Data;

// AuthController lo utiliza para convertir JSON a objeto Java
@Data
public class RegisterRequest {
    private String email;
    private String username;
    private String password;
}