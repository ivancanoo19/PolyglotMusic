package edu.unam.fi.bdn.pf.entity;

import lombok.Builder;
import lombok.Data;
import java.util.List;

@Data
@Builder
public class Artista {
    private String id;
    private String name;
    private String photo;
    private List<AlbumItem> albums;
    private List<CancionItem> topSongs; // almacena el top 5 de sus canciones mejores calificadas

    @Data
    @Builder
    public static class AlbumItem {
        private String albumId;
        private String albumTitle;
        private int albumYear;
        private String albumPhoto;
    }

    // con esto, mapeamos los datos estrictamente necesarios de las canciones
    @Data
    @Builder
    public static class CancionItem {
        private String songId;
        private String songName;
        private int duration;
        private double averageScore;
    }
}
