package edu.unam.fi.bdn.pf.dto;

import lombok.Data;

@Data
public class ActividadRequest {
    private String usuarioId;
    private String cancionId;
    private String cancionNombre;
    private String albumId;
}
