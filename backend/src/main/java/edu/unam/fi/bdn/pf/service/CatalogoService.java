package edu.unam.fi.bdn.pf.service;

import edu.unam.fi.bdn.pf.dao.CatalogoDAO;
import edu.unam.fi.bdn.pf.entity.Album;
import edu.unam.fi.bdn.pf.entity.Cancion;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CatalogoService {
    private final CatalogoDAO catalogoDAO;

    public CatalogoService(CatalogoDAO catalogoDAO) {
        this.catalogoDAO = catalogoDAO;
    } // El constructor

    public List<Album> buscarAlbumes(String query) {
        if (query == null || query.isBlank())
            throw new IllegalArgumentException("La búsqueda no puede ser vacía");
        return catalogoDAO.buscarAlbumes(query.trim());
    }

    public Album getAlbum(String id) {
        return catalogoDAO.findAlbumById(id)
                .orElseThrow(() -> new IllegalArgumentException("Álbum no encontrado"));
    }

    public List<Cancion> buscarCanciones(String query) {
        if (query == null || query.isBlank())
            throw new IllegalArgumentException("La búsqueda no puede ser vacía");
        return catalogoDAO.buscarCanciones(query.trim());
    }

    public Cancion getCancion(String id) {
        return catalogoDAO.findCancionById(id)
                .orElseThrow(() -> new IllegalArgumentException("Canción no encontrada"));
    }
}