package edu.unam.fi.bdn.pf;

import com.datastax.oss.driver.api.core.CqlSession;
import com.datastax.oss.driver.api.core.cql.Row;
import edu.unam.fi.bdn.pf.dao.CassandraPoolManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.junit.jupiter.api.Test;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

class CassandraConnectionTest {
    private static final Logger logger = LoggerFactory.getLogger(CassandraConnectionTest.class);

    @Test
    void checkCassandraConnection() {
        logger.debug("Verificando la conexión con Cassandra");
        try (CqlSession session = CassandraPoolManager.getConnection()) {
            Row row = session.execute("select release_version from system.local").one(); // obtenemos registro de la version
            assertNotNull(row, "No hubo respuesta de Cassandra");
            String version = row.getString("release_version"); // obtenemos la version
            logger.debug("Cassandra con version {}", version);
            assertNotNull(version, "No se obtuvo la version de Cassandra");
            logger.debug("Comprobando que exista el keyspace polyglotmusic");
            // obtenemos el registro que tenga keyspace_name polyglotmusic
            Row keyspaceRow = session.execute("select keyspace_name from system_schema.keyspaces where keyspace_name = 'polyglotmusic'").one();
            assertNotNull(keyspaceRow, "El keyspace polyglotmusic no existe");
        }
    }

    @Test
    void insertAndRetrieveCassandra() {
        UUID userId = UUID.randomUUID();
        UUID songId = UUID.randomUUID();
        int rating = 5;
        Instant ratedAt = Instant.now();

        try (CqlSession session = CassandraPoolManager.getConnection()) {
            // insertar registro
            session.execute(
                """
                INSERT INTO ratings_by_user(user_id, song_id, rating, rated_at)
                VALUES (?, ?, ?, ?)
                """,
                userId,
                songId,
                rating,
                ratedAt
            );

            // traer registro
            Row row = session.execute(
                """
                SELECT user_id, song_id, rating, rated_at
                FROM ratings_by_user
                WHERE user_id = ?
                AND song_id = ?
                """,
                userId,
                songId
            ).one();

            assertNotNull(row, "No se encontró el registro insertado");

            logger.debug("Verificando ID del usuario");
            assertEquals(userId, row.getUuid("user_id"), "El ID del usuario no coincide");
            logger.debug("Verificando ID de la canción");
            assertEquals(songId, row.getUuid("song_id"), "El ID de la canción no coincide");
            logger.debug("Verificando rating de la canción");
            assertEquals(rating, row.getInt("rating"), "El rating no coincide");
            logger.debug("Verificando timestamp del rating");
            // truncamos porque si no muestra un error ya que Cassandra almacena
            // con precision de ms no de ns como Instant
            assertEquals(ratedAt.truncatedTo(ChronoUnit.MILLIS), row.getInstant("rated_at"), "El timestamp no coincide");
        }
    }
}