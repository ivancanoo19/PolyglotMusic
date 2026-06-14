// docker exec -i c-ifc-egm-cassandra cqlsh < /scripts/s-02-create-tables-cassandra.cql

USE polyglotmusic;

// partición por usuario, ordenado por rating
// se agrega rated at y song id ya que si no
// cassandra no sabría diferenciar cuando se tenga
// un mismo valor en rating, por eso se agrega la fecha
// y id de la cancion
DROP TABLE IF EXISTS ratings_by_user;
CREATE TABLE ratings_by_user (
    user_id UUID,
    rating INT,
    rated_at TIMESTAMP,
    song_id UUID,
    PRIMARY KEY (user_id, rating, rated_at, song_id)
) WITH CLUSTERING ORDER BY (rating DESC, rated_at DESC);

// para poder obtener el promedio de las canciones y
// almacenarlo en redis en un zset
DROP TABLE IF EXISTS song_rating_stats;
CREATE TABLE song_rating_stats (
    song_id UUID PRIMARY KEY,
    total_ratings COUNTER,
    rating_sum COUNTER
);

// para las escuchadas recientemente de cada usuario
DROP TABLE IF EXISTS listening_history_by_user;
CREATE TABLE listening_history_by_user (
    user_id UUID,
    listened_at TIMESTAMP,
    song_id UUID,
    PRIMARY KEY (user_id, listened_at)
) WITH CLUSTERING ORDER BY (listened_at DESC);

DESCRIBE TABLES;