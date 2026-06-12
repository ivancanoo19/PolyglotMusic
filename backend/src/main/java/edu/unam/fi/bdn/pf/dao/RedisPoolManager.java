package edu.unam.fi.bdn.pf.dao;

import io.github.cdimascio.dotenv.Dotenv;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

import java.time.Duration;

/*
* JedisPool para evitar crear objetos continuamente que puedan
* afectar el rendimiento, mejor reutilizar conexiones existentes
 */
public class RedisPoolManager {
    private static final JedisPool jedisPool; // variable inmutable de clase, un jedis pool por app

    private static final Dotenv dotenv = Dotenv.load(); // cargar el .env
    private static final String HOST = dotenv.get("REDIS_IP");
    private static final int PORT = Integer.parseInt(dotenv.get("REDIS_PORT"));

    static { // se ejecuta cuando la clase se carga a memoria
        JedisPoolConfig poolConfig = new JedisPoolConfig(); // configuracion del pool

        // Máximo de conexiones simultaneas del pool
        poolConfig.setMaxTotal(10);
        // Máximo de conexiones inactivas en el pool
        poolConfig.setMaxIdle(3);
        // Mínimo de conexiones inactivas en el pool
        poolConfig.setMinIdle(1);
        // 2 segundos inactiva antes de volver al pool
        poolConfig.setMaxWait(Duration.ofSeconds(2));

        jedisPool = new JedisPool(poolConfig, HOST, PORT); // conexion a redis
    }

    // para obtener una conexion del pool (utilizar con try-catch autocloseable)
    public static Jedis getConnection() {
        return jedisPool.getResource();
    }

    // cerrar pool al detener la app
    public static void shutdown() {
        if (jedisPool != null && !jedisPool.isClosed()) {
            jedisPool.close();
        }
    }
}