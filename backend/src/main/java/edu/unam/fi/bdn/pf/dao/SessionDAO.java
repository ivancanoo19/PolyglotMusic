package edu.unam.fi.bdn.pf.dao;

import redis.clients.jedis.Jedis;
import org.springframework.stereotype.Repository;

@Repository
public class SessionDAO {

    public String getUserIdBySession(String sessionId) {
        // verificamos si la sesión de un usuario sigue siendo existente en Redis
        try (Jedis jedis = RedisPoolManager.getConnection()) {
            return jedis.get("session:" + sessionId);
        }
    }
}
