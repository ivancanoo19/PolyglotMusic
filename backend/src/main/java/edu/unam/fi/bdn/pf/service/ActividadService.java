package edu.unam.fi.bdn.pf.service;

import edu.unam.fi.bdn.pf.dao.ActividadDAO;
import edu.unam.fi.bdn.pf.dao.RankingDAO;
import edu.unam.fi.bdn.pf.dto.CalificacionRequest;
import edu.unam.fi.bdn.pf.dto.ReproduccionRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

@Service
public class ActividadService {
    private final ActividadDAO actividadDAO;
    private final RankingDAO   rankingDAO;

    public ActividadService(ActividadDAO actividadDAO, RankingDAO rankingDAO) {
        this.actividadDAO = actividadDAO;
        this.rankingDAO   = rankingDAO;
    }

    // Para reproducción Cassandra + Redis en paralelo
    public void reproducir(ReproduccionRequest req) {
        // un hilo para cassandra donde guardará userID - TS - songID
        CompletableFuture<Void> cassandra = CompletableFuture.runAsync(() ->
                actividadDAO.registrarReproduccion(req.getUsuarioId(), req.getCancionId())
        );
        // otro hilo para redis donde se incrementa el numero de reproducciones de una cancion
        CompletableFuture<Void> redis = CompletableFuture.runAsync(() ->
                rankingDAO.incrementarReproduccion(req.getCancionId())
        );
        // terminar método hasta que se terminen de ejecutar ambos
        CompletableFuture.allOf(cassandra, redis).join();
    }

    // Calificación Cassandra + Redis en paralelo
    public void calificar(CalificacionRequest req) {
        // 1. Cassandra bitácora + acumular stats
        // se guarda userID - calificacion - TS_calificacion - songID
        CompletableFuture<Void> registerStats = CompletableFuture.runAsync(() ->
                actividadDAO.registrarCalificacion(
                        req.getUsuarioId(),
                        req.getCancionId(),
                        req.getCalificacion()
                )
        );

        // 2. Cassandra stats -> calcular promedio -> Redis
        // Esto se hace de manera secuencial, pero a la par que el paso 1
        CompletableFuture<Void> updateAverage = CompletableFuture.runAsync(() -> {
            // Leemos los stats acumulados de Cassandra
            long[] stats = actividadDAO.obtenerRatingStats(req.getCancionId());
            long totalRatings = stats[0];
            long ratingSum    = stats[1];

            // Calculamos el promedio
            double promedio = totalRatings > 0 ? (double) ratingSum / totalRatings : req.getCalificacion();
            // TODO: FALTA CHECAR SI GUARDAMOS EN MONGO LA CALIFICACION DE CADA
            // CANCION PARA MOSTRARLO EN LA UI TAMBIEN
            // Actualizamos Redis con el promedio real
            rankingDAO.actualizarRatingCancion(req.getCancionId(), promedio);
        });
        // terminar método hasta que ambos terminen
        CompletableFuture.allOf(registerStats, updateAverage).join();
    }

    // Historial Cassandra
    public List<Map<String, String>> obtenerHistorial(String usuarioId) {
        return actividadDAO.obtenerHistorial(usuarioId);
    }
}