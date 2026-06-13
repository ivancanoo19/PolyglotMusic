// Función para insertar el token en cada petición
const getHeaders = () => ({
    'Content-Type': 'application/json',
    'X-Session-Id': localStorage.getItem('sessionId')
});

export async function obtenerMisPlaylists() {
    const res = await fetch('/api/playlists', { headers: getHeaders() });
    if (!res.ok) throw new Error('Error al cargar playlists');
    return res.json();
}

export async function crearPlaylist(name) {
    const res = await fetch('/api/playlists', {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ name })
    });
    if (!res.ok) throw new Error('Error al crear la playlist');
    return res.json();
}

export async function agregarCancionAPlaylist(playlistId, cancion) {
    const res = await fetch(`/api/playlists/${playlistId}/canciones`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(cancion)
    });
    if (!res.ok) throw new Error('Error al agregar la canción');
    return res.json();
}