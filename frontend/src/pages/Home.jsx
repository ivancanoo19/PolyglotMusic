import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../api/auth'
import { obtenerMisPlaylists, crearPlaylist, agregarCancionAPlaylist, eliminarCancionDePlaylist, borrarPlaylistDocumento }
    from '../api/playlists'
import { buscarCanciones, buscarAlbumes, getAlbum, buscarArtistas, getArtista, getCancion } from '../api/catalogo'
import { reproducirCancion, calificarCancion, obtenerHistorial } from '../api/actividad'

const RECENT = [
  { id: 1, name: 'Back in Black',    artist: 'AC/DC',        emoji: '🎸', bg: '#0d2a4a' },
  { id: 2, name: 'Clair de Lune',   artist: 'Debussy',       emoji: '🎹', bg: '#1a2a0a' },
  { id: 3, name: 'So What',         artist: 'Miles Davis',   emoji: '🎺', bg: '#2a0a1a' },
  { id: 4, name: 'Tom Sawyer',      artist: 'Rush',          emoji: '🥁', bg: '#1a1a2a' },
]

const TOP_SONGS = [
  { id: 1, name: 'Bohemian Rhapsody',       artist: 'Queen',       album: 'A Night at the Opera', duration: '5:55', emoji: '🎸', bg: '#0d2a4a', plays: 18240 },
  { id: 2, name: 'Hotel California',        artist: 'Eagles',       album: 'Hotel California',     duration: '6:30', emoji: '🎵', bg: '#1a2a0a', plays: 15800 },
  { id: 3, name: 'Stairway to Heaven',      artist: 'Led Zeppelin', album: 'Led Zeppelin IV',      duration: '8:02', emoji: '🎹', bg: '#2a0a0a', plays: 14200 },
  { id: 4, name: 'Smells Like Teen Spirit', artist: 'Nirvana',      album: 'Nevermind',            duration: '5:01', emoji: '🎺', bg: '#0a1a2a', plays: 12900 },
  { id: 5, name: 'Purple Haze',             artist: 'Jimi Hendrix', album: 'Are You Experienced',  duration: '3:37', emoji: '🥁', bg: '#1a0a2a', plays: 11500 },
  { id: 6, name: 'Wish You Were Here',      artist: 'Pink Floyd',   album: 'Wish You Were Here',   duration: '5:34', emoji: '🎸', bg: '#0a2a1a', plays: 10200 },
  { id: 7, name: 'Enter Sandman',           artist: 'Metallica',    album: 'Metallica',            duration: '5:31', emoji: '🎵', bg: '#2a1a0a', plays: 9800  },
]

const TOP_ALBUMS = [
  { id: 1, name: 'Thriller',               artist: 'Michael Jackson', emoji: '🎤', bg: '#1a0a2a', rating: 9.4 },
  { id: 2, name: 'Dark Side of the Moon',  artist: 'Pink Floyd',      emoji: '🌙', bg: '#0a1a2a', rating: 9.2 },
  { id: 3, name: 'Abbey Road',             artist: 'The Beatles',     emoji: '🎸', bg: '#2a1a0a', rating: 9.1 },
  { id: 4, name: 'Rumours',                artist: 'Fleetwood Mac',   emoji: '🎵', bg: '#0a2a1a', rating: 8.9 },
]

const ALL_SONGS = [...TOP_SONGS,
  { id: 8,  name: 'Kashmir',          artist: 'Led Zeppelin', album: 'Physical Graffiti', duration: '8:32', emoji: '🎸', bg: '#0d2a4a', plays: 8900 },
  { id: 9,  name: 'Comfortably Numb', artist: 'Pink Floyd',   album: 'The Wall',          duration: '6:23', emoji: '🎹', bg: '#1a2a0a', plays: 8700 },
  { id: 10, name: 'Black',            artist: 'Pearl Jam',    album: 'Ten',               duration: '5:43', emoji: '🎵', bg: '#2a0a1a', plays: 7600 },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

// Muestra ★ + promedio si el valor es mayor a 0
function ScoreBadge({ score }) {
  if (!score || Number(score) <= 0) return null
  return (
    <div className="flex items-center gap-0.5 flex-shrink-0">
      <span className="text-yellow-400 text-xs">★</span>
      <span className="text-xs text-[#a7a7a7]">{Number(score).toFixed(1)}</span>
    </div>
  )
}

// Duración en segundos → "M:SS"
function fmtDur(secs) {
  if (!secs) return '0:00'
  return `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}`
}

// ── Componentes ───────────────────────────────────────────────────────────────

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/>
          <path d="M8 12.5c2-1 4.5-1.2 7 0" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M6.5 9.5c3-1.5 6.5-1.8 10 0" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M9.5 15.5c1.5-.7 3.2-.8 5 0" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      <span className="text-white font-medium text-sm hidden md:block">PolyglotMusic</span>
    </div>
  )
}

// Fila de canción genérica — con foto real, estrella y botón calificar
function SongRow({ song, index, onPlay, onRate, playing }) {
  const [hovered, setHovered] = useState(false)
  const id       = song.id       || song.songId
  const name     = song.name     || song.songName     || '—'
  const artist   = song.artistName|| song.artist      || ''
  const photo    = song.albumPhoto|| song.songPhoto   || null
  const duration = song.duration  || 0
  const score    = song.averageUsersScore ?? null
  const isPlaying = (playing?.id === id) || (playing?.songId === id)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onPlay(song)}
      className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-white/5 group transition-colors"
    >
      <div className="w-5 flex items-center justify-center flex-shrink-0 text-sm">
        {hovered || isPlaying
          ? <span className={`text-base ${isPlaying ? 'text-blue-400' : 'text-white'}`}>▶</span>
          : <span className={isPlaying ? 'text-blue-400' : 'text-[#a7a7a7]'}>{index + 1}</span>
        }
      </div>
      {photo
        ? <img src={photo} alt={name} className="w-10 h-10 rounded object-cover flex-shrink-0"
            onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }} />
        : null
      }
      <div className="w-10 h-10 rounded bg-[#282828] items-center justify-center text-lg flex-shrink-0"
        style={{ display: photo ? 'none' : 'flex' }}>🎵</div>
      <div className="flex-1 min-w-0">
        <div className={`text-sm font-medium truncate ${isPlaying ? 'text-blue-400' : 'text-white'}`}>{name}</div>
        {artist && <div className="text-xs text-[#a7a7a7] truncate">{artist}</div>}
      </div>
      <ScoreBadge score={score} />
      <div className="text-xs text-[#a7a7a7] flex-shrink-0 w-10 text-right">{fmtDur(duration)}</div>
      {onRate && (
        <button onClick={e => { e.stopPropagation(); onRate(song) }}
          className="text-[#a7a7a7] hover:text-blue-400 flex-shrink-0 hidden group-hover:inline text-xs transition-colors ml-1"
          title="Calificar">★</button>
      )}
    </div>
  )
}

function AlbumCard({ album }) {
  return (
    <div className="bg-[#181818] hover:bg-[#242424] transition-colors rounded-lg p-4 cursor-pointer group">
      <div className="w-full aspect-square rounded-md flex items-center justify-center text-4xl mb-3 relative" style={{ background: album.bg }}>
        {album.emoji}
        <button className="absolute bottom-2 right-2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all shadow-lg">
          <span className="text-white text-sm ml-0.5">▶</span>
        </button>
      </div>
      <div className="text-sm font-medium text-white truncate">{album.name}</div>
      <div className="text-xs text-[#a7a7a7] mt-1">{album.artist}</div>
      <div className="flex items-center gap-1 mt-1">
        <span className="text-yellow-400 text-xs">★</span>
        <span className="text-xs text-[#a7a7a7]">{album.rating}</span>
      </div>
    </div>
  )
}

function PlaylistCover({ songs }) {
  if (!songs || songs.length === 0)
    return <div className="w-full h-full bg-[#282828] flex items-center justify-center text-4xl">🎵</div>
  if (songs.length < 4)
    return <img src={songs[0].albumPhoto} className="w-full h-full object-cover" alt="" />
  return (
    <div className="grid grid-cols-2 w-full h-full">
      {songs.slice(0,4).map((s,i) => <img key={i} src={s.albumPhoto} className="w-full h-full object-cover" alt="" />)}
    </div>
  )
}

function ConfirmModal({ title, message, confirmLabel = 'Confirmar', confirmClass = 'bg-red-600 hover:bg-red-700', onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={onCancel}>
      <div className="bg-[#121212] rounded-2xl p-8 w-80 text-center" onClick={e => e.stopPropagation()}>
        <h3 className="text-white font-medium text-lg mb-2">{title}</h3>
        <p className="text-[#a7a7a7] text-sm mb-6">{message}</p>
        <div className="flex gap-3">
          <button onClick={onCancel} className="flex-1 py-2.5 rounded-full border border-[#535353] text-white text-sm hover:border-white transition-colors">Cancelar</button>
          <button onClick={onConfirm} className={`flex-1 py-2.5 rounded-full text-white text-sm font-medium transition-colors ${confirmClass}`}>{confirmLabel}</button>
        </div>
      </div>
    </div>
  )
}

function CrearPlaylistModal({ onConfirm, onCancel }) {
  const [nombre, setNombre] = useState('')
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={onCancel}>
      <div className="bg-[#121212] rounded-2xl p-8 w-80" onClick={e => e.stopPropagation()}>
        <h3 className="text-white font-medium text-lg mb-1 text-center">Nueva playlist</h3>
        <p className="text-[#a7a7a7] text-sm text-center mb-6">Dale un nombre a tu playlist</p>
        <input autoFocus type="text" value={nombre} onChange={e => setNombre(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && nombre.trim() && onConfirm(nombre.trim())}
          placeholder="Mi playlist" maxLength={60}
          className="w-full bg-[#242424] border border-[#535353] rounded-md px-4 py-3 text-white text-sm placeholder-[#6a6a6a] focus:outline-none focus:border-blue-500 transition mb-6" />
        <div className="flex gap-3">
          <button onClick={onCancel} className="flex-1 py-2.5 rounded-full border border-[#535353] text-white text-sm hover:border-white transition-colors">Cancelar</button>
          <button onClick={() => nombre.trim() && onConfirm(nombre.trim())} disabled={!nombre.trim()}
            className="flex-1 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors">Crear</button>
        </div>
      </div>
    </div>
  )
}

// ── Home ──────────────────────────────────────────────────────────────────────
export default function Home() {
  const [activeNav, setActiveNav]           = useState('inicio')
  const [search, setSearch]                 = useState('')
  const [playing, setPlaying]               = useState(null)
  const [isPaused, setIsPaused]             = useState(false)
  const [activePlaylist, setActivePlaylist] = useState(null)
  const [activeAlbum, setActiveAlbum]       = useState(null)
  const [activeArtist, setActiveArtist]     = useState(null)
  const [ratingModal, setRatingModal]       = useState(null)
  const [rating, setRating]                 = useState(0)
  const [toasts, setToasts]                 = useState([])
  const [searchResults, setSearchResults]   = useState({ songs: [], albums: [], artists: [] })
  const [searching, setSearching]           = useState(false)
  const [misPlaylists, setMisPlaylists]     = useState([])
  const [songToAdd, setSongToAdd]           = useState(null)
  const [showCrearPlaylist, setShowCrearPlaylist] = useState(false)
  const [playlistAEliminar, setPlaylistAEliminar] = useState(null)
  const [historial, setHistorial]           = useState([])
  const [loadingHistorial, setLoadingHistorial] = useState(false)

  const navigate       = useNavigate()
  const nombreUsuario  = localStorage.getItem('username') || 'Usuario'
  const inicialUsuario = nombreUsuario.slice(0, 2).toUpperCase()
  const usuarioId      = localStorage.getItem('userId')
  const hour           = new Date().getHours()
  const greeting       = hour < 12 ? 'Buenos días' : hour < 19 ? 'Buenas tardes' : 'Buenas noches'

  useEffect(() => {
    cargarPlaylists()
    cargarHistorial()
  }, [])

  async function cargarPlaylists() {
    try { setMisPlaylists(await obtenerMisPlaylists()) }
    catch { console.error('No se pudieron cargar las playlists') }
  }

  async function cargarHistorial() {
    if (!usuarioId) return
    setLoadingHistorial(true)
    try { setHistorial(await obtenerHistorial(usuarioId)) }
    catch { console.error('No se pudo cargar el historial') }
    finally { setLoadingHistorial(false) }
  }

  async function handleLogout() {
    try { await logout(localStorage.getItem('sessionId')) } finally {
      localStorage.removeItem('sessionId')
      localStorage.removeItem('username')
      localStorage.removeItem('userId')
      navigate('/')
    }
  }

  async function handleCrearPlaylist(nombre) {
    try { await crearPlaylist(nombre); toast('Playlist creada'); cargarPlaylists() }
    catch { toast('Error al crear playlist') }
    finally { setShowCrearPlaylist(false) }
  }

  async function handleAgregarCancion(playlistId) {
    try {
      await agregarCancionAPlaylist(playlistId, {
        songId:    songToAdd.id    || songToAdd.songId,
        name:      songToAdd.name  || songToAdd.songName,
        duration:  songToAdd.duration || 0,
        albumPhoto: songToAdd.albumPhoto || songToAdd.songPhoto || 'https://cdn-icons-png.flaticon.com/512/26/26805.png'
      })
      toast('Canción agregada'); setSongToAdd(null); cargarPlaylists()
    } catch { toast('Error al agregar la canción') }
  }

  async function handleEliminarCancion(playlistId, track) {
    try {
      await eliminarCancionDePlaylist(playlistId, track.songId, track.duration)
      toast('Canción eliminada')
      const data = await obtenerMisPlaylists()
      setMisPlaylists(data)
      setActivePlaylist(data.find(p => p.id === playlistId))
    } catch { toast('Error al eliminar la canción') }
  }

  async function handleBorrarPlaylist() {
    if (!playlistAEliminar) return
    try {
      await borrarPlaylistDocumento(playlistAEliminar.id)
      toast('Playlist eliminada'); setActivePlaylist(null); setActiveNav('inicio'); cargarPlaylists()
    } catch { toast('Error al eliminar la playlist') }
    finally { setPlaylistAEliminar(null) }
  }

  async function handleSearch(value) {
    setSearch(value)
    if (value.length < 2) { setSearchResults({ songs: [], albums: [], artists: [] }); return }
    setActiveNav('buscar'); setSearching(true)
    try {
      const [songs, albums, artists] = await Promise.all([buscarCanciones(value), buscarAlbumes(value), buscarArtistas(value)])
      setSearchResults({ songs, albums, artists })
    } finally { setSearching(false) }
  }

  async function getAlbumDetails(albumId) {
    try { setActiveAlbum(await getAlbum(albumId)) }
    catch { toast('Error al cargar el álbum') }
  }

  async function getArtistDetails(artistaId) {
    try { setActiveArtist(await getArtista(artistaId)) }
    catch { toast('Error al cargar el artista') }
  }

  function handleBack() {
    if (activeAlbum)    { setActiveAlbum(null);    return }
    if (activeArtist)   { setActiveArtist(null);   return }
    if (activePlaylist) { setActivePlaylist(null);  return }
    if (activeNav !== 'inicio') {
      setActiveNav('inicio'); setSearch('')
      setSearchResults({ songs: [], albums: [], artists: [] })
    }
  }

  function toast(msg) {
    const id = Date.now()
    setToasts(t => [...t, { id, msg }])
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3000)
  }

  // Reproduce — obtiene datos completos (con score) desde MongoDB
  async function playSong(idOrSongId) {
    try {
      const song = await getCancion(idOrSongId)
      setPlaying(song)
      setIsPaused(false)
      toast(`▶ ${song.name}`)
      if (usuarioId) {
        reproducirCancion(usuarioId, song.id)
          .then(cargarHistorial)
          .catch(console.error)
      }
    } catch { toast('Error al cargar la canción') }
  }

  async function handlePlay(track) {
    const id = track.id || track.songId
    if (!id) return
    if (playing?.id === id || playing?.songId === id) { setIsPaused(p => !p); return }
    await playSong(id)
  }

  function openRate(song) { setRatingModal(song); setRating(0) }

  async function submitRating() {
    if (!ratingModal || rating === 0) return
    const songId = ratingModal.id || ratingModal.songId
    try {
      if (usuarioId && songId) await calificarCancion(usuarioId, songId, rating)
      toast(`Calificaste "${ratingModal.name || ratingModal.songName}" con ${rating}/10`)
      // Refresca la canción en el player para actualizar el score visible
      if (playing && (playing.id === songId || playing.songId === songId)) {
        const updated = await getCancion(songId)
        setPlaying(updated)
      }
    } catch { toast('Error al guardar la calificación') }
    setRatingModal(null)
  }

  // ── Vistas ────────────────────────────────────────────────────────────────

  function PlaylistView({ playlist }) {
    return (
      <div>
        <div className="flex items-end gap-6 mb-8">
          <div className="w-40 h-40 rounded-lg overflow-hidden flex-shrink-0 shadow-2xl"><PlaylistCover songs={playlist.songs} /></div>
          <div>
            <p className="text-xs uppercase tracking-wider text-[#a7a7a7] mb-1">Lista</p>
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-5xl font-bold text-white">{playlist.name}</h1>
              <button onClick={() => setPlaylistAEliminar({ id: playlist.id, name: playlist.name })}
                className="w-9 h-9 rounded-full bg-red-500/10 text-red-400 hover:bg-red-500/20 flex items-center justify-center transition-colors mt-3 text-lg">🗑️</button>
            </div>
            <p className="text-sm text-[#a7a7a7]">{nombreUsuario} • {playlist.totalSongs} canciones</p>
          </div>
        </div>
        <div className="space-y-1">
          {!playlist.songs || playlist.songs.length === 0
            ? <p className="text-[#a7a7a7] text-sm px-3 mt-4">Esta playlist está vacía. Busca canciones para agregar.</p>
            : playlist.songs.map((track, i) => (
                <div key={track.songId + i}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 cursor-pointer group"
                  onClick={() => handlePlay(track)}>
                  <span className="text-sm text-[#a7a7a7] w-5 text-center group-hover:hidden">{i + 1}</span>
                  <span className="text-white text-sm w-5 text-center hidden group-hover:block">▶</span>
                  <img src={track.albumPhoto} className="w-10 h-10 rounded object-cover flex-shrink-0" alt=""
                    onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }} />
                  <div className="w-10 h-10 rounded bg-[#282828] items-center justify-center text-lg flex-shrink-0" style={{display:'none'}}>🎵</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-white truncate">{track.name}</div>
                  </div>
                  <ScoreBadge score={track.averageUsersScore} />
                  <div className="text-xs text-[#a7a7a7]">{fmtDur(track.duration)}</div>
                  <button onClick={e => { e.stopPropagation(); handleEliminarCancion(playlist.id, track) }}
                    className="text-[#a7a7a7] hover:text-red-400 ml-2 flex-shrink-0 hidden group-hover:block transition-colors">✕</button>
                </div>
              ))
          }
        </div>
      </div>
    )
  }

  function MainContent() {
    if (activePlaylist) return <PlaylistView playlist={activePlaylist} />

    // ── Vista álbum ──────────────────────────────────────────────────────────
    if (activeAlbum) return (
      <div>
        <div className="flex items-end gap-6 mb-8">
          <img src={activeAlbum.photo} alt={activeAlbum.title} className="w-40 h-40 rounded-lg object-cover shadow-2xl" />
          <div>
            <p className="text-xs uppercase tracking-wider text-[#a7a7a7] mb-1">Álbum</p>
            <h1 className="text-4xl font-bold text-white mb-2">{activeAlbum.title}</h1>
            <p className="text-sm text-[#a7a7a7]">{activeAlbum.artistName} • {activeAlbum.releaseYear} • {activeAlbum.totalSongs} canciones</p>
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="text-xs font-medium text-[#a7a7a7] uppercase tracking-wider mb-4 px-3">Pistas</h3>
          {activeAlbum.tracklist.map((track, i) => (
            <div key={track.songId}
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 group cursor-pointer"
              onClick={() => handlePlay(track)}>
              <span className="text-sm text-[#a7a7a7] w-5 text-center group-hover:hidden">{i + 1}</span>
              <span className="text-white text-sm w-5 text-center hidden group-hover:block">▶</span>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-white truncate">{track.songName}</div>
                <div className="text-xs text-[#a7a7a7]">{activeAlbum.artistName}</div>
              </div>
              <ScoreBadge score={track.averageUsersScore} />
              <div className="text-xs text-[#a7a7a7]">{fmtDur(track.duration)}</div>
              <button onClick={e => { e.stopPropagation(); setSongToAdd({ ...track, albumPhoto: activeAlbum.photo }) }}
                className="text-[#a7a7a7] hover:text-white ml-2 flex-shrink-0 hidden group-hover:block">➕</button>
            </div>
          ))}
        </div>
      </div>
    )

    // ── Vista artista ────────────────────────────────────────────────────────
    if (activeArtist) return (
      <div>
        <button onClick={handleBack} className="flex items-center gap-2 text-[#a7a7a7] hover:text-white text-sm mb-6 transition-colors">← Volver</button>
        <div className="flex items-end gap-6 mb-8">
          <img src={activeArtist.photo} alt={activeArtist.name} className="w-40 h-40 rounded-full object-cover shadow-2xl" />
          <div>
            <p className="text-xs uppercase tracking-wider text-[#a7a7a7] mb-1">Perfil Verificado</p>
            <h1 className="text-5xl font-bold text-white mb-2">{activeArtist.name}</h1>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-base font-medium text-white mb-4 px-3">Canciones Populares</h3>
          <div className="space-y-1">
            {activeArtist.topSongs?.map((track, i) => (
              <SongRow key={track.songId} song={track} index={i} onPlay={handlePlay} onRate={openRate} playing={playing} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-base font-medium text-white mb-4 px-3">Discografía</h3>
          <div className="grid grid-cols-4 gap-3">
            {activeArtist.albums?.map(a => (
              <div key={a.albumId} onClick={() => getAlbumDetails(a.albumId)}
                className="bg-[#181818] hover:bg-[#242424] rounded-lg p-4 cursor-pointer transition-colors">
                <img src={a.albumPhoto} className="w-full aspect-square rounded-md object-cover mb-3" alt="" />
                <div className="text-sm font-medium text-white truncate">{a.albumTitle}</div>
                <div className="text-xs text-[#a7a7a7] mt-1">{a.albumYear}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )

    // ── Búsqueda ─────────────────────────────────────────────────────────────
    if (activeNav === 'buscar') return (
      <div>
        <h2 className="text-xl font-medium text-white mb-6">{search ? `Resultados para "${search}"` : 'Buscar'}</h2>
        {searching && <div className="flex items-center gap-2 text-[#a7a7a7] text-sm"><div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />Buscando...</div>}

        {!searching && searchResults.artists?.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xs font-medium text-[#a7a7a7] uppercase tracking-wider mb-4">Artistas</h3>
            <div className="grid grid-cols-4 gap-3">
              {searchResults.artists.slice(0, 4).map(a => (
                <div key={a.id} onClick={() => getArtistDetails(a.id)}
                  className="bg-[#181818] hover:bg-[#242424] rounded-lg p-4 cursor-pointer transition-colors flex flex-col items-center text-center">
                  <img src={a.photo} className="w-24 h-24 rounded-full object-cover mb-3 shadow-lg" alt="" />
                  <div className="text-sm font-medium text-white truncate w-full">{a.name}</div>
                  <div className="text-xs text-[#a7a7a7] mt-1">Artista</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!searching && searchResults.albums?.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xs font-medium text-[#a7a7a7] uppercase tracking-wider mb-4">Álbumes</h3>
            <div className="grid grid-cols-4 gap-3">
              {searchResults.albums.map(a => (
                <div key={a.id} onClick={() => getAlbumDetails(a.id)}
                  className="bg-[#181818] hover:bg-[#242424] rounded-lg p-4 cursor-pointer transition-colors group">
                  <div className="relative mb-3">
                    <img src={a.photo} alt={a.title} className="w-full aspect-square rounded-md object-cover"
                      onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }} />
                    <div className="w-full aspect-square rounded-md bg-[#282828] items-center justify-center text-4xl" style={{display:'none'}}>🎵</div>
                    <button className="absolute bottom-2 right-2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all shadow-lg">
                      <span className="text-white text-sm ml-0.5">▶</span>
                    </button>
                  </div>
                  <div className="text-sm font-medium text-white truncate">{a.title}</div>
                  <div className="text-xs text-[#a7a7a7] mt-1 truncate">{a.artistName}</div>
                  <div className="text-xs text-[#a7a7a7] mt-0.5">{a.releaseYear}</div>
                  {a.averageScore > 0 && <div className="flex items-center gap-1 mt-1"><span className="text-yellow-400 text-xs">★</span><span className="text-xs text-[#a7a7a7]">{a.averageScore.toFixed(1)}</span></div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {!searching && searchResults.songs?.length > 0 && (
          <div>
            <h3 className="text-xs font-medium text-[#a7a7a7] uppercase tracking-wider mb-4">Canciones</h3>
            <div className="space-y-1">
              {searchResults.songs.map((t, i) => (
                <div key={t.id} onClick={() => handlePlay(t)}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 cursor-pointer group">
                  <span className="text-sm text-[#a7a7a7] w-5 text-center group-hover:hidden">{i + 1}</span>
                  <span className="text-white text-sm w-5 text-center hidden group-hover:block">▶</span>
                  <img src={t.albumPhoto} alt={t.albumName} className="w-10 h-10 rounded object-cover flex-shrink-0"
                    onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }} />
                  <div className="w-10 h-10 rounded bg-[#282828] items-center justify-center text-lg flex-shrink-0" style={{display:'none'}}>🎵</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-white truncate">{t.name}</div>
                    <div className="text-xs text-[#a7a7a7]">{t.artistName}</div>
                  </div>
                  <div className="text-xs text-[#a7a7a7] hidden md:block truncate max-w-32">{t.albumName}</div>
                  {/* ★ promedio canción en búsqueda */}
                  <ScoreBadge score={t.averageUsersScore} />
                  <div className="text-xs text-[#a7a7a7] flex-shrink-0">{fmtDur(t.duration)}</div>
                  <button onClick={e => { e.stopPropagation(); openRate(t) }}
                    className="text-[#a7a7a7] hover:text-blue-400 flex-shrink-0 hidden group-hover:inline text-xs ml-1">★</button>
                  <button onClick={e => { e.stopPropagation(); setSongToAdd(t) }}
                    className="text-[#a7a7a7] hover:text-white flex-shrink-0 hidden group-hover:inline ml-1">➕</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {!searching && search.length > 1 && searchResults.songs?.length === 0 && searchResults.albums?.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-3">🔍</div>
            <p className="text-white font-medium mb-1">No se encontraron resultados</p>
            <p className="text-[#a7a7a7] text-sm">Intenta con otro término para "{search}"</p>
          </div>
        )}
      </div>
    )

    // ── Historial ────────────────────────────────────────────────────────────
    if (activeNav === 'historial') return (
      <div>
        <h2 className="text-xl font-medium text-white mb-6">Historial de reproducción</h2>
        {loadingHistorial
          ? <div className="flex items-center gap-2 text-[#a7a7a7] text-sm"><div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />Cargando...</div>
          : historial.length === 0
            ? <p className="text-[#a7a7a7] text-sm">Aún no has escuchado ninguna canción.</p>
            : <>
                <p className="text-xs text-[#a7a7a7] uppercase tracking-wider mb-3">Recientes</p>
                <div className="space-y-1">
                  {historial.map((t, i) => (
                    <SongRow key={(t.songId||t.id)+i} song={t} index={i} onPlay={handlePlay} onRate={openRate} playing={playing} />
                  ))}
                </div>
              </>
        }
      </div>
    )

    // ── Rankings ─────────────────────────────────────────────────────────────
    if (activeNav === 'ranking') return (
      <div>
        <h2 className="text-xl font-medium text-white mb-2">Rankings globales</h2>
        <p className="text-xs text-[#a7a7a7] mb-6">Datos en tiempo real desde Redis</p>
        <h3 className="text-base font-medium text-white mb-3">🏆 Top 10 canciones más reproducidas</h3>
        <div className="space-y-1 mb-8">
          {TOP_SONGS.map((t, i) => (
            <div key={t.id} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 cursor-pointer group" onClick={() => handlePlay(t)}>
              <span className="text-sm text-[#a7a7a7] w-5 text-center">{i + 1}</span>
              <div className="w-8 h-8 rounded text-base flex items-center justify-center" style={{ background: t.bg }}>{t.emoji}</div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-white truncate">{t.name}</div>
                <div className="text-xs text-[#a7a7a7]">{t.artist}</div>
              </div>
              <ScoreBadge score={t.averageUsersScore} />
              <div className="text-xs text-[#a7a7a7]">{t.plays.toLocaleString()} plays</div>
              <button onClick={e => { e.stopPropagation(); openRate(t) }} className="text-xs text-blue-400 hover:text-blue-300 ml-2 hidden group-hover:inline">★ Calificar</button>
            </div>
          ))}
        </div>
        <h3 className="text-base font-medium text-white mb-3">⭐ Top 10 álbumes mejor calificados</h3>
        <div className="grid grid-cols-2 gap-3">
          {TOP_ALBUMS.map(a => <AlbumCard key={a.id} album={a} />)}
        </div>
      </div>
    )

    // ── Inicio ────────────────────────────────────────────────────────────────
    return (
      <div>
        <h2 className="text-xl font-medium text-white mb-5">{greeting}, {nombreUsuario} 👋</h2>

        {/* Escuchado recientemente — últimas 6 del historial real */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-medium text-white">Escuchado recientemente</h3>
          <button onClick={() => setActiveNav('historial')} className="text-xs text-[#a7a7a7] hover:text-white transition-colors">Ver todo</button>
        </div>
        {loadingHistorial
          ? <div className="flex items-center gap-2 text-[#a7a7a7] text-sm mb-8"><div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />Cargando...</div>
          : historial.length === 0
            ? <p className="text-[#a7a7a7] text-sm mb-8">Aún no has escuchado nada. ¡Busca una canción!</p>
            : <div className="grid grid-cols-2 gap-2 mb-8">
                {historial.slice(0, 6).map(r => (
                  <div key={r.songId||r.id} onClick={() => handlePlay(r)}
                    className="flex items-center gap-3 bg-[#242424] hover:bg-[#2a2a2a] rounded-md overflow-hidden cursor-pointer transition-colors group">
                    <img src={r.albumPhoto||r.songPhoto} alt={r.name||r.songName}
                      className="w-14 h-14 object-cover flex-shrink-0"
                      onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }} />
                    <div className="w-14 h-14 bg-[#282828] items-center justify-center text-2xl flex-shrink-0" style={{display:'none'}}>🎵</div>
                    <div className="min-w-0 flex-1 pr-2">
                      <div className="text-sm font-medium text-white truncate">{r.name||r.songName}</div>
                      <ScoreBadge score={r.averageUsersScore} />
                    </div>
                  </div>
                ))}
              </div>
        }

        {/* Top global */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-medium text-white">Top global</h3>
          <button onClick={() => setActiveNav('ranking')} className="text-xs text-[#a7a7a7] hover:text-white transition-colors">Ver ranking completo</button>
        </div>
        <div className="space-y-1 mb-8">
          {TOP_SONGS.slice(0, 5).map((t, i) => (
            <div key={t.id} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 cursor-pointer group" onClick={() => handlePlay(t)}>
              <span className="text-sm text-[#a7a7a7] w-5 text-center">{i + 1}</span>
              <div className="w-10 h-10 rounded flex items-center justify-center text-lg flex-shrink-0" style={{ background: t.bg }}>{t.emoji}</div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white truncate">{t.name}</div>
                <div className="text-xs text-[#a7a7a7] truncate">{t.artist}</div>
              </div>
              <ScoreBadge score={t.averageUsersScore} />
              <div className="text-xs text-[#a7a7a7]">{t.duration}</div>
            </div>
          ))}
        </div>

        {/* Álbumes mejor calificados */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-medium text-white">Álbumes mejor calificados</h3>
          <button onClick={() => setActiveNav('ranking')} className="text-xs text-[#a7a7a7] hover:text-white transition-colors">Ver todo</button>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {TOP_ALBUMS.map(a => <AlbumCard key={a.id} album={a} />)}
        </div>
      </div>
    )
  }

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="flex h-screen bg-black overflow-hidden select-none">

      {/* Sidebar */}
      <div className="w-64 flex-shrink-0 flex flex-col gap-2 p-2">
        <div className="bg-[#121212] rounded-xl p-4 flex flex-col gap-1">
          <Logo />
          <div className="mt-4 space-y-1">
            {[
              { id: 'inicio',    label: 'Inicio',    icon: '⌂' },
              { id: 'buscar',    label: 'Buscar',    icon: '⌕' },
              { id: 'historial', label: 'Historial', icon: '⟳' },
              { id: 'ranking',   label: 'Rankings',  icon: '★' },
            ].map(n => (
              <button key={n.id}
                onClick={() => { setActiveNav(n.id); setActivePlaylist(null); setActiveAlbum(null); setActiveArtist(null); setSearch('') }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activeNav === n.id ? 'text-white bg-white/10' : 'text-[#a7a7a7] hover:text-white'
                }`}>
                <span className="text-base w-5 text-center">{n.icon}</span>{n.label}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-[#121212] rounded-xl p-4 flex-1 overflow-y-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-[#a7a7a7]">Tu biblioteca</span>
            <button onClick={() => setShowCrearPlaylist(true)}
              className="text-[#a7a7a7] hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors text-lg leading-none">+</button>
          </div>
          <div className="space-y-1">
            {misPlaylists.map(p => (
              <button key={p.id} onClick={() => { setActivePlaylist(p); setActiveNav('inicio') }}
                className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0"><PlaylistCover songs={p.songs} /></div>
                <div className="min-w-0 text-left">
                  <div className="text-sm font-medium text-white truncate">{p.name}</div>
                  <div className="text-xs text-[#a7a7a7]">Lista • {p.totalSongs} canciones</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-[#121212] rounded-xl p-2">
          <button onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-[#a7a7a7] hover:text-red-400 hover:bg-red-400/10 transition-colors">
            <span className="text-base w-5 text-center">⏻</span>Cerrar sesión
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 bg-[#121212] rounded-xl m-2 ml-0 overflow-y-auto flex flex-col">
          <div className="sticky top-0 z-10 bg-[#121212] px-6 py-4 flex items-center gap-4">
            <div className="flex gap-2">
              <button onClick={handleBack} className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors text-sm">‹</button>
              <button className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white text-sm opacity-30 cursor-not-allowed">›</button>
            </div>
            <div className="flex-1 max-w-xs relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a7a7a7] text-sm">⌕</span>
              <input value={search} onChange={e => handleSearch(e.target.value)} placeholder="¿Qué quieres escuchar?"
                className="w-full pl-9 pr-4 py-2.5 bg-[#242424] border border-transparent rounded-full text-white text-sm placeholder-[#6a6a6a] focus:outline-none focus:border-blue-500 focus:bg-[#2a2a2a] transition" />
            </div>
            <div className="ml-auto">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-medium text-white">{inicialUsuario}</div>
            </div>
          </div>
          <div className="px-6 pb-6 flex-1"><MainContent /></div>
        </div>

        {/* Player */}
        <div className="h-20 bg-[#0a0a0a] border-t border-[#282828] flex items-center px-4 gap-4 flex-shrink-0">
          {/* Track info */}
          <div className="flex items-center gap-3 w-56 flex-shrink-0">
            {playing ? (
              <>
                <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0 bg-[#282828] flex items-center justify-center text-xl">
                  {playing.albumPhoto
                    ? <img src={playing.albumPhoto} alt={playing.name} className="w-full h-full object-cover"
                        onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='block' }} />
                    : null
                  }
                  <span style={{ display: playing.albumPhoto ? 'none' : 'block' }}>🎵</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-white truncate">{playing.name}</div>
                  <div className="text-xs text-[#a7a7a7] truncate">{playing.artistName || playing.artist || ''}</div>
                  {/* ★ promedio visible en el player en todo momento */}
                  <ScoreBadge score={playing.averageUsersScore} />
                </div>
                <button onClick={() => openRate(playing)}
                  className="text-[#a7a7a7] hover:text-blue-400 transition-colors flex-shrink-0 text-sm" title="Calificar">★</button>
              </>
            ) : (
              <div className="text-[#a7a7a7] text-xs">Sin reproducción</div>
            )}
          </div>

          {/* Controls */}
          <div className="flex-1 flex flex-col items-center gap-2">
            <div className="flex items-center gap-5">
              <button className="text-[#a7a7a7] hover:text-white transition-colors text-sm">⇄</button>
              <button className="text-[#a7a7a7] hover:text-white transition-colors text-lg">⏮</button>
              <button onClick={() => setIsPaused(p => !p)}
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform">
                <span className="text-black text-sm">{isPaused ? '▶' : '⏸'}</span>
              </button>
              <button className="text-[#a7a7a7] hover:text-white transition-colors text-lg">⏭</button>
              <button className="text-[#a7a7a7] hover:text-white transition-colors text-sm">↻</button>
            </div>
            <div className="flex items-center gap-2 w-full max-w-md">
              <span className="text-xs text-[#a7a7a7] w-7 text-right">0:00</span>
              <div className="flex-1 h-1 bg-[#535353] rounded-full cursor-pointer group">
                <div className="w-0 h-full bg-white group-hover:bg-blue-500 rounded-full transition-colors" />
              </div>
              <span className="text-xs text-[#a7a7a7] w-7">{playing ? fmtDur(playing.duration) : '0:00'}</span>
            </div>
          </div>

          {/* Volume */}
          <div className="w-36 flex items-center gap-2 flex-shrink-0">
            <span className="text-[#a7a7a7] text-sm">🔊</span>
            <div className="flex-1 h-1 bg-[#535353] rounded-full cursor-pointer group">
              <div className="w-2/3 h-full bg-white group-hover:bg-blue-500 rounded-full transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal calificación */}
      {ratingModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={() => setRatingModal(null)}>
          <div className="bg-[#121212] rounded-2xl p-8 w-80 text-center" onClick={e => e.stopPropagation()}>
            {ratingModal.albumPhoto
              ? <img src={ratingModal.albumPhoto} alt="" className="w-20 h-20 rounded-lg object-cover mx-auto mb-4" />
              : <div className="text-4xl mb-4">🎵</div>
            }
            <h3 className="text-white font-medium mb-1">{ratingModal.name || ratingModal.songName}</h3>
            <p className="text-[#a7a7a7] text-sm mb-1">{ratingModal.artistName || ratingModal.artist || ''}</p>
            {/* Promedio actual en el modal */}
            {ratingModal.averageUsersScore > 0 && (
              <p className="text-xs text-[#a7a7a7] mb-4">
                Promedio actual: <span className="text-yellow-400">★ {Number(ratingModal.averageUsersScore).toFixed(1)}</span>
              </p>
            )}
            <p className="text-white text-sm mb-3">Califica del 1 al 10</p>
            <div className="flex justify-center gap-1 mb-6">
              {[1,2,3,4,5,6,7,8,9,10].map(n => (
                <button key={n} onClick={() => setRating(n)}
                  className={`w-7 h-7 rounded text-xs font-medium transition-colors ${n <= rating ? 'bg-blue-600 text-white' : 'bg-[#242424] text-[#a7a7a7] hover:bg-[#333]'}`}>
                  {n}
                </button>
              ))}
            </div>
            <button onClick={submitRating} disabled={rating === 0}
              className="w-full py-2.5 rounded-full bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium hover:bg-blue-700 transition-colors">
              Calificar
            </button>
          </div>
        </div>
      )}

      {/* Modal agregar a playlist */}
      {songToAdd && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={() => setSongToAdd(null)}>
          <div className="bg-[#121212] rounded-2xl p-6 w-80" onClick={e => e.stopPropagation()}>
            <h3 className="text-white font-medium mb-1 text-center">Agregar a Playlist</h3>
            <p className="text-[#a7a7a7] text-xs text-center mb-4 truncate px-4">{songToAdd.name || songToAdd.songName}</p>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {misPlaylists.length === 0
                ? <p className="text-[#a7a7a7] text-sm text-center py-4">No tienes playlists creadas</p>
                : misPlaylists.map(p => (
                    <button key={p.id} onClick={() => handleAgregarCancion(p.id)}
                      className="w-full text-left px-4 py-3 rounded-md text-sm text-white hover:bg-white/10 transition-colors flex items-center gap-3">
                      <div className="w-8 h-8 rounded overflow-hidden flex-shrink-0"><PlaylistCover songs={p.songs} /></div>
                      <span className="truncate">{p.name}</span>
                    </button>
                  ))
              }
            </div>
            <button onClick={() => setSongToAdd(null)} className="w-full mt-4 py-2 text-[#a7a7a7] text-sm hover:text-white transition-colors">Cancelar</button>
          </div>
        </div>
      )}

      {showCrearPlaylist && <CrearPlaylistModal onConfirm={handleCrearPlaylist} onCancel={() => setShowCrearPlaylist(false)} />}

      {playlistAEliminar && (
        <ConfirmModal
          title="Eliminar playlist"
          message={`¿Estás seguro de que quieres eliminar "${playlistAEliminar.name}"? Esta acción no se puede deshacer.`}
          confirmLabel="Eliminar" confirmClass="bg-red-600 hover:bg-red-700"
          onConfirm={handleBorrarPlaylist} onCancel={() => setPlaylistAEliminar(null)}
        />
      )}

      {/* Toasts */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 flex flex-col gap-2 z-50 pointer-events-none">
        {toasts.map(t => (
          <div key={t.id} className="bg-[#1a73e8] text-white text-sm px-4 py-2 rounded-full shadow-lg animate-pulse">{t.msg}</div>
        ))}
      </div>
    </div>
  )
}