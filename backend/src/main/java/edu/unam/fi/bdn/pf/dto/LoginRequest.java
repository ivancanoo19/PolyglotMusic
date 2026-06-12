package edu.unam.fi.bdn.pf.dto;

import lombok.Data;

@Data
public class LoginRequest {
    private String user;
    private String password;
}
