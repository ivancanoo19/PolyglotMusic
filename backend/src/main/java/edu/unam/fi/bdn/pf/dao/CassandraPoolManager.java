package edu.unam.fi.bdn.pf.dao;

import com.datastax.oss.driver.api.core.CqlSession;
import com.datastax.oss.driver.api.core.config.DefaultDriverOption;
import com.datastax.oss.driver.api.core.config.DriverConfigLoader;
import io.github.cdimascio.dotenv.Dotenv;

import java.net.InetSocketAddress;
import java.time.Duration;

public class CassandraPoolManager {
    private static final Dotenv dotenv = Dotenv.load();
    private static final String HOST = dotenv.get("CASSANDRA_IP");
    private static final int PORT = Integer.parseInt(dotenv.get("CASSANDRA_PORT"));
    private static final String KEYSPACE = dotenv.get("CASSANDRA_KEYSPACE");

    private static CqlSession session; // sesion unica a Cassandra

    // para obtener una conexion del pool
    public static CqlSession getConnection() {
        if (session == null || session.isClosed()) {
            // configuracion del pool y timeouts
            DriverConfigLoader loader = DriverConfigLoader.programmaticBuilder()
                    .withDuration(DefaultDriverOption.REQUEST_TIMEOUT, Duration.ofSeconds(5)) // espera maximo 5s por consulta
                    .withInt(DefaultDriverOption.CONNECTION_POOL_LOCAL_SIZE, 2) // 2 conexiones debido a la multiplexacion
                    .build();
            session = CqlSession.builder() // creacion de la sesion
                    .addContactPoint(new InetSocketAddress(HOST, PORT))
                    .withConfigLoader(loader)
                    .withLocalDatacenter("DC1")
                    .withKeyspace(KEYSPACE)
                    .build();
        }
        return session;
    }

    // cerrar el pool al detener la app
    public static void close() {
        if (session != null && !session.isClosed()) {
            session.close();
        }
    }
}