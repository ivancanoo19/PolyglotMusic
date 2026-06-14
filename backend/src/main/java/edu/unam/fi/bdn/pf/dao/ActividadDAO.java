package edu.unam.fi.bdn.pf.dao;

import com.datastax.oss.driver.api.core.CqlSession;
import com.datastax.oss.driver.api.core.cql.Row;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import static com.datastax.oss.driver.api.querybuilder.QueryBuilder.*;

@Repository
public class ActividadDAO {
    // historial del usuario
    public void registrarReproduccion(String userId, String songId) {
        try (CqlSession session = CassandraPoolManager.getConnection()){
            var insert = insertInto("listeniing_history_by_user")
                    .value("user_id", literal(UUID.fromString(userId)))
                    .value("listened_at", literal(Instant.now()))
                    .value("song_id", literal(UUID.fromString(songId)));

            session.execute(insert.build());
        }
    }

    public List<Map<String, String>> obtenerHistorial(String userId) {
        try (CqlSession session = CassandraPoolManager.getConnection()) {
            var select = selectFrom("listening_history_by_user")
                    .all()
                    .whereColumn("user_id").isEqualTo(literal(UUID.fromString(userId)))
                    .limit(6) // solo mostrar las última 6 canciones
                    .build();
            List<Map<String, String>> result = new ArrayList<>();
            for (Row row : session.execute(select)) {
                result.add(Map.of(
                        "listenedAt", row.getInstant("listened_at").toString(),
                        "songId", row.getUuid("song_id").toString()
                ));
            }
            return result;
        }
    }

    // para la calificacion
    public void registrarCalificacion(String userId, String songId, int rating) {
        try (CqlSession session = CassandraPoolManager.getConnection()) {
            // bitácora en ratings_by_user
            var insertRating = insertInto("ratings_by_user")
                    .value("user_id",  literal(UUID.fromString(userId)))
                    .value("rating",   literal(rating))
                    .value("rated_at", literal(Instant.now()))
                    .value("song_id",  literal(UUID.fromString(songId)));

            session.execute(insertRating.build());

            // acumular stats (COUNTER — obligatorio usar UPDATE con +=)
            // se hace consulta porque por lo que investigue el querybuilder no
            // tiene soporte para counter
            session.execute(
                    com.datastax.oss.driver.api.core.cql.SimpleStatement.newInstance(
                            "UPDATE song_rating_stats " +
                                    "SET total_ratings += 1, rating_sum += ? " +
                                    "WHERE song_id = ?",
                            (long) rating, UUID.fromString(songId)
                    )
            );
        }
    }

    public long[] obtenerRatingStats(String songId) {
        // obtener suma de calificaciones y numero de calificaciones de song_rating_stats
        try (CqlSession session = CassandraPoolManager.getConnection()) {
            var select = selectFrom("song_rating_stats")
                    .columns("total_ratings", "rating_sum")
                    .whereColumn("song_id").isEqualTo(literal(UUID.fromString(songId)))
                    .build();

            Row row = session.execute(select).one();
            if (row == null) return new long[]{0L, 0L};

            return new long[] {
                    row.getLong("total_ratings"),
                    row.getLong("rating_sum")
            };
        }
    }
}
