// api/catalogo
export async function buscarAlbumes(query) {
    const res = await fetch(`/api/catalogo/albumes?q=${encodeURIComponent(query)}`)
    if (!res.ok) throw new Error('Error al buscar álbumes')
    return res.json()
}

export async function buscarCanciones(query) {
    const res = await fetch(`/api/catalogo/canciones?q=${encodeURIComponent(query)}`)
    console.log(res)
    if (!res.ok) throw new Error('Error al buscar canciones')
    return res.json()
}

export async function getAlbum(id) {
    const res = await fetch(`/api/catalogo/albumes/${id}`)
    if (!res.ok) throw new Error('Álbum no encontrado')
    return res.json()
}

export async function buscarArtistas(query) {
    const res = await fetch(`/api/catalogo/artistas?q=${encodeURIComponent(query)}`)
    if (!res.ok) throw new Error('Error al buscar artistas')
    return res.json()
}

export async function getArtista(id) {
    const res = await fetch(`/api/catalogo/artistas/${id}`)
    if (!res.ok) throw new Error('Artista no encontrado')
    return res.json()
}