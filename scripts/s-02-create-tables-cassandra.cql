// docker exec -i c-ifc-egm-cassandra cqlsh < /scripts/s-02-create-tables-cassandra.cql

USE polyglotmusic;

DROP TABLE IF EXISTS ratings_by_user;
CREATE TABLE ratings_by_user (
    user_id UUID,
    song_id UUID,
    rating INT,
    rated_at TIMESTAMP,
    PRIMARY KEY (user_id, song_id)
);

DROP TABLE IF EXISTS ratings_by_song;
CREATE TABLE ratings_by_song (
    song_id UUID,
    user_id UUID,
    rating INT,
    rated_at TIMESTAMP,
    PRIMARY KEY (song_id, user_id)
);

DROP TABLE IF EXISTS song_rating_stats;
CREATE TABLE song_rating_stats (
    song_id UUID PRIMARY KEY,
    total_ratings COUNTER,
    rating_sum COUNTER
);

DESCRIBE TABLES;