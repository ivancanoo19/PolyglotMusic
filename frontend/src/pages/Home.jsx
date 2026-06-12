import { useState } from 'react'

// ── Datos de ejemplo ─────────────────────────────────────────────────────────
const USER = { name: 'Eduardo', initials: 'EG' }

const PLAYLISTS = [
  { id: 1, name: 'Canciones que me gustan', count: 24, emoji: '❤️', color: '#1a73e8' },
  { id: 2, name: 'Rock clásico',            count: 18, emoji: '🎸', color: '#185fa5' },
  { id: 3, name: 'Lo-fi para estudiar',     count: 31, emoji: '🎹', color: '#0f6e56' },
  { id: 4, name: 'Jazz nocturno',           count: 12, emoji: '🎺', color: '#854f0b' },
  { id: 5, name: 'Viaje en carretera',      count: 45, emoji: '🚗', color: '#993556' },
]

const RECENT = [
  { id: 1, name: 'Back in Black',    artist: 'AC/DC',        emoji: '🎸', bg: '#0d2a4a' },
  { id: 2, name: 'Clair de Lune',   artist: 'Debussy',       emoji: '🎹', bg: '#1a2a0a' },
  { id: 3, name: 'So What',         artist: 'Miles Davis',   emoji: '🎺', bg: '#2a0a1a' },
  { id: 4, name: 'Tom Sawyer',      artist: 'Rush',          emoji: '🥁', bg: '#1a1a2a' },
]

const TOP_SONGS = [
  { id: 1, name: 'Bohemian Rhapsody',   artist: 'Queen',          album: 'A Night at the Opera', duration: '5:55', emoji: '🎸', bg: '#0d2a4a', plays: 18240 },
  { id: 2, name: 'Hotel California',    artist: 'Eagles',          album: 'Hotel California',     duration: '6:30', emoji: '🎵', bg: '#1a2a0a', plays: 15800 },
  { id: 3, name: 'Stairway to Heaven',  artist: 'Led Zeppelin',    album: 'Led Zeppelin IV',      duration: '8:02', emoji: '🎹', bg: '#2a0a0a', plays: 14200 },
  { id: 4, name: 'Smells Like Teen Spirit', artist: 'Nirvana',     album: 'Nevermind',            duration: '5:01', emoji: '🎺', bg: '#0a1a2a', plays: 12900 },
  { id: 5, name: 'Purple Haze',         artist: 'Jimi Hendrix',    album: 'Are You Experienced',  duration: '3:37', emoji: '🥁', bg: '#1a0a2a', plays: 11500 },
  { id: 6, name: 'Wish You Were Here',  artist: 'Pink Floyd',      album: 'Wish You Were Here',   duration: '5:34', emoji: '🎸', bg: '#0a2a1a', plays: 10200 },
  { id: 7, name: 'Enter Sandman',       artist: 'Metallica',       album: 'Metallica',            duration: '5:31', emoji: '🎵', bg: '#2a1a0a', plays: 9800  },
]

const TOP_ALBUMS = [
  { id: 1, name: 'Thriller',           artist: 'Michael Jackson', emoji: '🎤', bg: '#1a0a2a', rating: 9.4 },
  { id: 2, name: 'Dark Side of the Moon', artist: 'Pink Floyd',   emoji: '🌙', bg: '#0a1a2a', rating: 9.2 },
  { id: 3, name: 'Abbey Road',         artist: 'The Beatles',     emoji: '🎸', bg: '#2a1a0a', rating: 9.1 },
  { id: 4, name: 'Rumours',            artist: 'Fleetwood Mac',   emoji: '🎵', bg: '#0a2a1a', rating: 8.9 },
]

const ALL_SONGS = [...TOP_SONGS,
  { id: 8,  name: 'Kashmir',           artist: 'Led Zeppelin',  album: 'Physical Graffiti', duration: '8:32', emoji: '🎸', bg: '#0d2a4a', plays: 8900 },
  { id: 9,  name: 'Comfortably Numb',  artist: 'Pink Floyd',    album: 'The Wall',          duration: '6:23', emoji: '🎹', bg: '#1a2a0a', plays: 8700 },
  { id: 10, name: 'Black',             artist: 'Pearl Jam',     album: 'Ten',               duration: '5:43', emoji: '🎵', bg: '#2a0a1a', plays: 7600 },
]
// ─────────────────────────────────────────────────────────────────────────────

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

function TrackRow({ track, index, onPlay, playing }) {
  const [hovered, setHovered] = useState(false)
  const isPlaying = playing?.id === track.id

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onPlay(track)}
      className="grid items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors hover:bg-white/5"
      style={{ gridTemplateColumns: '32px 1fr 140px 60px' }}
    >
      <div className="flex items-center justify-center text-sm">
        {hovered || isPlaying
          ? <span className={`text-lg ${isPlaying ? 'text-blue-400' : 'text-white'}`}>▶</span>
          : <span className={`${isPlaying ? 'text-blue-400 font-medium' : 'text-[#a7a7a7]'}`}>{index + 1}</span>
        }
      </div>
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0 text-lg" style={{ background: track.bg }}>
          {track.emoji}
        </div>
        <div className="min-w-0">
          <div className={`text-sm font-medium truncate ${isPlaying ? 'text-blue-400' : 'text-white'}`}>{track.name}</div>
          <div className="text-xs text-[#a7a7a7] truncate">{track.artist}</div>
        </div>
      </div>
      <div className="text-xs text-[#a7a7a7] truncate hidden md:block">{track.album}</div>
      <div className="text-xs text-[#a7a7a7] text-right">{track.duration}</div>
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

export default function Home() {
  const [activeNav, setActiveNav]       = useState('inicio')
  const [search, setSearch]             = useState('')
  const [playing, setPlaying]           = useState(TOP_SONGS[0])
  const [isPaused, setIsPaused]         = useState(false)
  const [activePlaylist, setActivePlaylist] = useState(null)
  const [ratingModal, setRatingModal]   = useState(null)
  const [rating, setRating]             = useState(0)
  const [toasts, setToasts]             = useState([])

  function toast(msg) {
    const id = Date.now()
    setToasts(t => [...t, { id, msg }])
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3000)
  }

  function handlePlay(track) {
    if (playing?.id === track.id) {
      setIsPaused(p => !p)
    } else {
      setPlaying(track)
      setIsPaused(false)
      toast(`▶ Reproduciendo: ${track.name}`)
    }
  }

  function handleRate(item) {
    setRatingModal(item)
    setRating(0)
  }

  function submitRating() {
    toast(`Calificaste "${ratingModal.name}" con ${rating}/10`)
    setRatingModal(null)
  }

  const searchResults = search.length > 1
    ? ALL_SONGS.filter(s =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.artist.toLowerCase().includes(search.toLowerCase())
      )
    : []

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Buenos días' : hour < 19 ? 'Buenas tardes' : 'Buenas noches'

  // ── Vista de playlist ───────────────────────────────────────────────────────
  function PlaylistView({ playlist, onBack }) {
    return (
      <div>
        <button onClick={onBack} className="flex items-center gap-2 text-[#a7a7a7] hover:text-white text-sm mb-6 transition-colors">
          ← Volver
        </button>
        <div className="flex items-end gap-6 mb-8">
          <div className="w-40 h-40 rounded-lg flex items-center justify-center text-6xl flex-shrink-0" style={{ background: playlist.color }}>
            {playlist.emoji}
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-[#a7a7a7] mb-1">Lista</p>
            <h1 className="text-3xl font-medium text-white mb-2">{playlist.name}</h1>
            <p className="text-sm text-[#a7a7a7]">{USER.name} • {playlist.count} canciones</p>
          </div>
        </div>
        <div className="space-y-1">
          {ALL_SONGS.slice(0, 6).map((t, i) => (
            <TrackRow key={t.id} track={t} index={i} onPlay={handlePlay} playing={playing} />
          ))}
        </div>
      </div>
    )
  }

  // ── Contenido principal ─────────────────────────────────────────────────────
  function MainContent() {
    if (activePlaylist) return <PlaylistView playlist={activePlaylist} onBack={() => setActivePlaylist(null)} />

    if (activeNav === 'buscar' || search.length > 1) return (
      <div>
        <h2 className="text-xl font-medium text-white mb-6">
          {search ? `Resultados para "${search}"` : 'Buscar'}
        </h2>
        {searchResults.length > 0 ? (
          <div className="space-y-1">
            {searchResults.map((t, i) => (
              <TrackRow key={t.id} track={t} index={i} onPlay={handlePlay} playing={playing} />
            ))}
          </div>
        ) : search.length > 1 ? (
          <p className="text-[#a7a7a7] text-sm">No se encontraron resultados para "{search}"</p>
        ) : (
          <p className="text-[#a7a7a7] text-sm">Escribe algo para buscar canciones o artistas.</p>
        )}
      </div>
    )

    if (activeNav === 'historial') return (
      <div>
        <h2 className="text-xl font-medium text-white mb-6">Historial de reproducción</h2>
        <p className="text-xs text-[#a7a7a7] uppercase tracking-wider mb-3">Hoy</p>
        <div className="space-y-1">
          {ALL_SONGS.slice(0, 7).map((t, i) => (
            <TrackRow key={t.id} track={t} index={i} onPlay={handlePlay} playing={playing} />
          ))}
        </div>
      </div>
    )

    if (activeNav === 'ranking') return (
      <div>
        <h2 className="text-xl font-medium text-white mb-2">Rankings globales</h2>
        <p className="text-xs text-[#a7a7a7] mb-6">Datos en tiempo real desde Redis</p>

        <h3 className="text-base font-medium text-white mb-3">🏆 Top 10 canciones más reproducidas</h3>
        <div className="space-y-1 mb-8">
          {TOP_SONGS.map((t, i) => (
            <div key={t.id} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 cursor-pointer" onClick={() => handlePlay(t)}>
              <span className="text-sm text-[#a7a7a7] w-5 text-center">{i + 1}</span>
              <div className="w-8 h-8 rounded text-base flex items-center justify-center" style={{ background: t.bg }}>{t.emoji}</div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-white truncate">{t.name}</div>
                <div className="text-xs text-[#a7a7a7]">{t.artist}</div>
              </div>
              <div className="text-xs text-[#a7a7a7]">{t.plays.toLocaleString()} plays</div>
              <button onClick={e => { e.stopPropagation(); handleRate(t) }} className="text-xs text-blue-400 hover:text-blue-300 ml-2">Calificar</button>
            </div>
          ))}
        </div>

        <h3 className="text-base font-medium text-white mb-3">⭐ Top 10 álbumes mejor calificados</h3>
        <div className="grid grid-cols-2 gap-3">
          {TOP_ALBUMS.map(a => <AlbumCard key={a.id} album={a} />)}
        </div>
      </div>
    )

    // Inicio (default)
    return (
      <div>
        <h2 className="text-xl font-medium text-white mb-5">{greeting}, {USER.name} 👋</h2>

        {/* Escuchado recientemente */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-medium text-white">Escuchado recientemente</h3>
          <button onClick={() => setActiveNav('historial')} className="text-xs text-[#a7a7a7] hover:text-white transition-colors">Ver todo</button>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-8">
          {RECENT.map(r => (
            <div key={r.id} onClick={() => handlePlay(r)} className="flex items-center gap-3 bg-[#242424] hover:bg-[#2a2a2a] rounded-md overflow-hidden cursor-pointer transition-colors group">
              <div className="w-14 h-14 flex items-center justify-center text-2xl flex-shrink-0" style={{ background: r.bg }}>{r.emoji}</div>
              <span className="text-sm font-medium text-white truncate pr-2">{r.name}</span>
            </div>
          ))}
        </div>

        {/* Top global */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-medium text-white">Top global</h3>
          <button onClick={() => setActiveNav('ranking')} className="text-xs text-[#a7a7a7] hover:text-white transition-colors">Ver ranking completo</button>
        </div>
        <div className="space-y-1 mb-8">
          {TOP_SONGS.slice(0, 5).map((t, i) => (
            <TrackRow key={t.id} track={t} index={i} onPlay={handlePlay} playing={playing} />
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

  return (
    <div className="flex h-screen bg-black overflow-hidden select-none">

      {/* ── Sidebar ─────────────────────────────────────────────────────────── */}
      <div className="w-64 flex-shrink-0 flex flex-col gap-2 p-2">
        {/* Nav */}
        <div className="bg-[#121212] rounded-xl p-4 flex flex-col gap-1">
          <Logo />
          <div className="mt-4 space-y-1">
            {[
              { id: 'inicio',    label: 'Inicio',    icon: '⌂' },
              { id: 'buscar',    label: 'Buscar',    icon: '⌕' },
              { id: 'historial', label: 'Historial', icon: '⟳' },
              { id: 'ranking',   label: 'Rankings',  icon: '★' },
            ].map(n => (
              <button
                key={n.id}
                onClick={() => { setActiveNav(n.id); setActivePlaylist(null); setSearch('') }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activeNav === n.id ? 'text-white bg-white/10' : 'text-[#a7a7a7] hover:text-white'
                }`}
              >
                <span className="text-base w-5 text-center">{n.icon}</span>
                {n.label}
              </button>
            ))}
          </div>
        </div>

        {/* Biblioteca */}
        <div className="bg-[#121212] rounded-xl p-4 flex-1 overflow-y-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-[#a7a7a7]">Tu biblioteca</span>
            <button
              onClick={() => toast('Funcionalidad: crear playlist (MongoDB)')}
              className="text-[#a7a7a7] hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            >+</button>
          </div>
          <div className="space-y-1">
            {PLAYLISTS.map(p => (
              <button
                key={p.id}
                onClick={() => { setActivePlaylist(p); setActiveNav('inicio') }}
                className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-white/5 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-md flex items-center justify-center text-lg flex-shrink-0" style={{ background: p.color }}>
                  {p.emoji}
                </div>
                <div className="min-w-0 text-left">
                  <div className="text-sm font-medium text-white truncate">{p.name}</div>
                  <div className="text-xs text-[#a7a7a7]">Lista • {p.count} canciones</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main ────────────────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 bg-[#121212] rounded-xl m-2 ml-0 overflow-y-auto flex flex-col">

          {/* Topbar */}
          <div className="sticky top-0 z-10 bg-[#121212] px-6 py-4 flex items-center gap-4">
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors text-sm">‹</button>
              <button className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors text-sm">›</button>
            </div>
            <div className="flex-1 max-w-xs relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a7a7a7] text-sm">⌕</span>
              <input
                value={search}
                onChange={e => { setSearch(e.target.value); if (e.target.value) setActiveNav('buscar') }}
                placeholder="¿Qué quieres escuchar?"
                className="w-full pl-9 pr-4 py-2.5 bg-[#242424] border border-transparent rounded-full text-white text-sm placeholder-[#6a6a6a] focus:outline-none focus:border-blue-500 focus:bg-[#2a2a2a] transition"
              />
            </div>
            <div className="ml-auto flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-medium text-white cursor-pointer">
                {USER.initials}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 pb-6 flex-1">
            <MainContent />
          </div>
        </div>

        {/* ── Player ──────────────────────────────────────────────────────────── */}
        <div className="h-20 bg-[#0a0a0a] border-t border-[#282828] flex items-center px-4 gap-4 flex-shrink-0">
          {/* Track info */}
          <div className="flex items-center gap-3 w-52 flex-shrink-0">
            <div className="w-12 h-12 rounded flex items-center justify-center text-xl flex-shrink-0" style={{ background: playing?.bg || '#1a73e8' }}>
              {playing?.emoji || '🎵'}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium text-white truncate">{playing?.name}</div>
              <div className="text-xs text-[#a7a7a7] truncate">{playing?.artist}</div>
            </div>
            <button
              onClick={() => handleRate(playing)}
              className="text-[#a7a7a7] hover:text-blue-400 transition-colors ml-1 flex-shrink-0 text-sm"
              title="Calificar"
            >★</button>
          </div>

          {/* Controls */}
          <div className="flex-1 flex flex-col items-center gap-2">
            <div className="flex items-center gap-5">
              <button className="text-[#a7a7a7] hover:text-white transition-colors text-sm">⇄</button>
              <button className="text-[#a7a7a7] hover:text-white transition-colors" onClick={() => { const i = ALL_SONGS.findIndex(s => s.id === playing?.id); setPlaying(ALL_SONGS[Math.max(0, i-1)]) }}>⏮</button>
              <button
                onClick={() => setIsPaused(p => !p)}
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform"
              >
                <span className="text-black text-sm">{isPaused ? '▶' : '⏸'}</span>
              </button>
              <button className="text-[#a7a7a7] hover:text-white transition-colors" onClick={() => { const i = ALL_SONGS.findIndex(s => s.id === playing?.id); setPlaying(ALL_SONGS[Math.min(ALL_SONGS.length-1, i+1)]) }}>⏭</button>
              <button className="text-[#a7a7a7] hover:text-white transition-colors text-sm">↻</button>
            </div>
            <div className="flex items-center gap-2 w-full max-w-md">
              <span className="text-xs text-[#a7a7a7] w-7 text-right">1:23</span>
              <div className="flex-1 h-1 bg-[#535353] rounded-full cursor-pointer group">
                <div className="w-1/3 h-full bg-white group-hover:bg-blue-500 rounded-full transition-colors" />
              </div>
              <span className="text-xs text-[#a7a7a7] w-7">{playing?.duration || '0:00'}</span>
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

      {/* ── Modal calificación ───────────────────────────────────────────────── */}
      {ratingModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={() => setRatingModal(null)}>
          <div className="bg-[#121212] rounded-2xl p-8 w-80 text-center" onClick={e => e.stopPropagation()}>
            <div className="text-4xl mb-3">{ratingModal.emoji || '🎵'}</div>
            <h3 className="text-white font-medium mb-1">{ratingModal.name}</h3>
            <p className="text-[#a7a7a7] text-sm mb-6">{ratingModal.artist}</p>
            <p className="text-white text-sm mb-3">Califica del 1 al 10</p>
            <div className="flex justify-center gap-1 mb-6">
              {[1,2,3,4,5,6,7,8,9,10].map(n => (
                <button
                  key={n}
                  onClick={() => setRating(n)}
                  className={`w-7 h-7 rounded text-xs font-medium transition-colors ${
                    n <= rating ? 'bg-blue-600 text-white' : 'bg-[#242424] text-[#a7a7a7] hover:bg-[#333]'
                  }`}
                >{n}</button>
              ))}
            </div>
            <button
              onClick={submitRating}
              disabled={rating === 0}
              className="w-full py-2.5 rounded-full bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Calificar
            </button>
          </div>
        </div>
      )}

      {/* ── Toasts ──────────────────────────────────────────────────────────── */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 flex flex-col gap-2 z-50 pointer-events-none">
        {toasts.map(t => (
          <div key={t.id} className="bg-[#1a73e8] text-white text-sm px-4 py-2 rounded-full shadow-lg animate-pulse">
            {t.msg}
          </div>
        ))}
      </div>
    </div>
  )
}