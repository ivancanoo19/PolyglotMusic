package edu.unam.fi.bdn.pf;

import edu.unam.fi.bdn.pf.dao.RedisPoolManager;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import redis.clients.jedis.Jedis;

public class RedisConnectionTest {
    private static final Logger logger = LoggerFactory.getLogger(RedisConnectionTest.class); // variable inmutable de clase, un logger por app

    @Test
    public void checkRedisConnection() {
        logger.debug("Verificando la conexión con Redis");
        try (Jedis jedis = RedisPoolManager.getConnection()) {
            String pong = jedis.ping();
            Assertions.assertEquals("PONG", pong, "Conexión no exitosa hacia Redis");
        }
    }

    @Test
    public void setAndGetRedis() {
        try (Jedis jedis = RedisPoolManager.getConnection()) {
            String firstKey = "integrante:1";
            String firstValue = "Ivan Cano";
            logger.debug("Guardando el primer valor -> key: {} con value: {}", firstKey, firstValue);
            jedis.set(firstKey, firstValue);
            logger.debug("Obteniendo y verificando el valor de la primer key");
            String actualFirstValue = jedis.get(firstKey);
            Assertions.assertEquals(firstValue, actualFirstValue, "El valor de la primera key es diferente al esperado");

            String secondKey = "integrante:2";
            String secondValue = "Eduardo Garcia";
            logger.debug("Guardando el segundo valor -> key: {} con value: {}", secondKey, secondValue);
            jedis.set(secondKey, secondValue);
            logger.debug("Obteniendo y verificando el valor de la segunda key");
            String actualSecondValue = jedis.get(secondKey);
            Assertions.assertEquals(secondValue, actualSecondValue, "El valor de la segunda key es diferente al esperado");
        }
    }
}