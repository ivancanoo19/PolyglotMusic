// docker exec -i c-ifc-egm-cassandra cqlsh < /scripts/s-02-create-tables-cassandra.cql

USE polyglotmusic;

// Esta primary key garantiza que:
//   - No se guarde un nuevo registro por cada canción que califique el usuario
//   - Es decir, si se trata de una calificación que ya había calificado anteriormente, queremos que precisamente
//     se sobreescriba el registro. No queremos que se inserte uno nuevo
//   - Quitamos el timestamp de esto y dejamos solo user_id y song_id
DROP TABLE IF EXISTS ratings_by_user;
create table ratings_by_user(
    user_id  text,
    song_id  text,
    rating   int,
    rated_at timestamp,
    PRIMARY KEY (user_id, song_id)
);

// para poder obtener el promedio de las canciones y
// almacenarlo en redis en un zset
DROP TABLE IF EXISTS song_rating_stats;
CREATE TABLE song_rating_stats (
    song_id TEXT PRIMARY KEY,
    total_ratings COUNTER,
    rating_sum COUNTER
);

// para las escuchadas recientemente de cada usuario
DROP TABLE IF EXISTS listening_history_by_user;
CREATE TABLE listening_history_by_user (
    user_id TEXT,
    listened_at TIMESTAMP,
    song_id TEXT,
    PRIMARY KEY (user_id, listened_at)
) WITH CLUSTERING ORDER BY (listened_at DESC);

DESCRIBE TABLES;