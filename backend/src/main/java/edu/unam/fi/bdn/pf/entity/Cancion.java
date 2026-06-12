package edu.unam.fi.bdn.pf.entity;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Cancion {
    private String id;
    private String name;
    private String artistId;
    private String artistName;
    private String albumId;
    private String albumName;
    private String albumPhoto;
    private int duration;
    private double averageUsersScore;
}
