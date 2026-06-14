package edu.unam.fi.bdn.pf.dto;

import lombok.Data;

@Data
public class CalificacionRequest {
    private String usuarioId;
    private String cancionId;
    private int calificacion;
}
