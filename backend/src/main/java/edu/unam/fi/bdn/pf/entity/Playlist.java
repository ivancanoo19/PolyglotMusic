package edu.unam.fi.bdn.pf.entity;

import lombok.Builder;
import lombok.Data;
import java.util.Date;
import java.util.List;

@Data
@Builder
public class Playlist {
    private String id;
    private String name;
    private String userId;
    private String username;
    private Date createdAt;
    private int totalSongs;
    private int playlistDuration;       // en segundos
    private List<PlaylistItem> songs;

    // para mapear el arreglo embebido de canciones
    @Data
    @Builder
    public static class PlaylistItem {
        private String songId;
        private String name;
        private int duration;
        private String albumPhoto;
    }
}
