// api/actividad
export async function reproducirCancion(usuarioId, cancionId) {
    await fetch('/api/actividad/reproducir', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuarioId, cancionId })
    })
}

export async function calificarCancion(usuarioId, cancionId, valor) {
    const res = await fetch('/api/actividad/calificar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuarioId, cancionId, valor })
    })
    if (!res.ok) throw new Error('Error al calificar')
}

export async function obtenerHistorial(usuarioId) {
    const res = await fetch(`/api/actividad/historial/${usuarioId}`)
    if (!res.ok) throw new Error('Error al obtener historial')
    return res.json()
}