import { useState } from 'react'
import { login } from '../api/auth'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const navigate = useNavigate()

  async function handleLogin() {
    try {
      const data = await login(user, password)
      localStorage.setItem('sessionId', data.sessionId)
      localStorage.setItem('username',  data.username)
      localStorage.setItem('userId',    data.userId)
      navigate('/home')
    } catch (e) {
      setError('Usuario o contraseña incorrectos')
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-start pt-10 px-4">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/>
            <path d="M8 12.5c2-1 4.5-1.2 7 0" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M6.5 9.5c3-1.5 6.5-1.8 10 0" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M9.5 15.5c1.5-.7 3.2-.8 5 0" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <span className="text-white text-2xl font-medium">PolyglotMusic</span>
      </div>

      {/* Card */}
      <div className="bg-[#121212] rounded-xl px-12 py-10 w-full max-w-md flex flex-col items-center">
        <h1 className="text-white text-2xl font-medium mb-8">
          Inicia sesión en PolyglotMusic
        </h1>

        {/* Botones sociales */}
        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-[#535353] text-white text-sm font-medium hover:border-white hover:bg-white/5 transition mb-3">
          Continuar con Google
        </button>
        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-[#535353] text-white text-sm font-medium hover:border-white hover:bg-white/5 transition mb-3">
          Continuar con GitHub
        </button>

        {/* Divider */}
        <div className="w-full flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-[#535353]" />
          <span className="text-[#a7a7a7] text-sm">o</span>
          <div className="flex-1 h-px bg-[#535353]" />
        </div>

        {/* Campos */}
        <div className="w-full mb-4">
          <label className="text-white text-sm font-medium block mb-1.5">
            Correo electrónico o nombre de usuario
          </label>
          <input
            type="text"
            value={user}
            onChange={e => setUser(e.target.value)}
            placeholder="Correo electrónico o nombre de usuario"
            className="w-full bg-[#242424] border border-[#535353] rounded-md px-3.5 py-3 text-white placeholder-[#6a6a6a] focus:outline-none focus:border-blue-500 focus:bg-[#2a2a2a] transition"
          />
        </div>
        <div className="w-full mb-2">
          <label className="text-white text-sm font-medium block mb-1.5">
            Contraseña
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="w-full bg-[#242424] border border-[#535353] rounded-md px-3.5 py-3 text-white placeholder-[#6a6a6a] focus:outline-none focus:border-blue-500 focus:bg-[#2a2a2a] transition"
          />
        </div>

        {error && <p className="text-red-400 text-sm mt-1 w-full">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full mt-4 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-medium text-sm transition"
        >
          Iniciar sesión
        </button>

        <button className="mt-5 text-white text-sm underline hover:text-blue-400 transition">
          ¿Olvidaste tu contraseña?
        </button>

        <div className="w-full h-px bg-[#282828] my-7" />

        <p className="text-[#a7a7a7] text-sm">
          ¿No tienes cuenta?{' '}
          <a href="/register" className="text-white underline hover:text-blue-400 transition">
            Regístrate en PolyglotMusic
          </a>
        </p>
      </div>
    </div>
  )
}