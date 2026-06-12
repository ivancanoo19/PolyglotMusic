package edu.unam.fi.bdn.pf.dto;

import lombok.Data;

@Data
public class LogoutRequest {
    private String sessionId;
}