package edu.unam.fi.bdn.pf.entity;

import lombok.Builder;
import lombok.Data;
import java.util.List;

@Data
@Builder
public class Album {
    private String id;
    private String title;
    private int releaseYear;
    private String photo;
    private String artistId;
    private String artistName;
    private int totalSongs;
    private int albumDuration;
    private List<TrackItem> tracklist;
    private double averageScore;

    @Data
    @Builder
    public static class TrackItem {
        private String songId;
        private String songName;
        private int duration;
    }
}
