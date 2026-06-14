package edu.unam.fi.bdn.pf.dao;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.resps.Tuple;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RankingDAO {
    // los sorted sets para Redis
    private static final String TOP_CANCIONES_PLAYS = "top_canciones:plays";
    private static final String TOP_CANCIONES_RATING = "top_canciones:rating";

    // Para reproducciones
    public void incrementarReproduccion(String songId) {
        try (Jedis jedis = RedisPoolManager.getConnection()) {
            jedis.zincrby(TOP_CANCIONES_PLAYS, 1, songId);
        }
    }

    public List<Tuple> getTopCancionesPorPlays() {
        try (Jedis jedis = RedisPoolManager.getConnection()) {
            return jedis.zrevrangeWithScores(TOP_CANCIONES_PLAYS, 0, 10);
        }
    }

    // Para calificaciones
    // esto lo llamamos despues de recalcular el promedio en Service
    public void actualizarRatingCancion(String songId, double promedio) {
        try (Jedis jedis = RedisPoolManager.getConnection()) {
            jedis.zadd(TOP_CANCIONES_RATING, promedio, songId);
        }
    }

    public List<Tuple> getTopCancionesPorRating() {
        try (Jedis jedis = RedisPoolManager.getConnection()) {
            return jedis.zrevrangeWithScores(TOP_CANCIONES_RATING, 0, 10);
        }
    }

}
