import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../api/auth'

export default function Register() {
  const [form, setForm] = useState({ email: '', username: '', password: '', confirm: '' })
   const [error, setError] = useState('')
  const navigate = useNavigate()

  // 4 niveles de seguridad
  function strength(p) {
    let s = 0
    if (p.length >= 8) s++ // mas de 8 caracteres
    if (/[A-Z]/.test(p)) s++ // al menos una mayuscula
    if (/[0-9]/.test(p)) s++ // al menos un numero
    if (/[^A-Za-z0-9]/.test(p)) s++ // al menos un alfanumerico
    return s
  }

  async function handleRegister() {
      // Validar la coincidencia de las contraseñas y la longitud
      if (form.password !== form.confirm) return setError('Las contraseñas no coinciden')
      if (strength(form.password) < 2)    return setError('La contraseña es muy débil')
      // Llamamos a nuestra funcion que consume el endpoint register
      try {
          const data = await register(form.email, form.username, form.password)
          // para la sesion (en si es mala practica esto porque con XSS lo pueden robar)
          // tendria que ser con algun JWT o algo por el estilo
          localStorage.setItem('sessionId', data.sessionId)
          localStorage.setItem('username',  data.username)
          localStorage.setItem('userId',    data.userId)
          navigate('/home') // una vez registrado nos vamos al home
      } catch (e) {
          setError(e.message || 'Error al crear la cuenta, intenta de nuevo')
      }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-start pt-10 px-4">
      {/* Logo igual que Login */}
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

      <div className="bg-[#121212] rounded-xl px-12 py-10 w-full max-w-md flex flex-col items-center">
        <h1 className="text-white text-2xl font-medium mb-1">Regístrate gratis</h1>
        <p className="text-[#a7a7a7] text-sm mb-7">para empezar a escuchar</p>

        {['email','username','password','confirm'].map((field) => (
          <div key={field} className="w-full mb-4">
            <label className="text-white text-sm font-medium block mb-1.5">
              {{ email: 'Correo electrónico', username: 'Nombre de usuario', password: 'Contraseña', confirm: 'Confirmar contraseña' }[field]}
            </label>
            <input
              type={field.includes('password') || field === 'confirm' ? 'password' : field === 'email' ? 'email' : 'text'}
              value={form[field]}
              onChange={e => setForm({...form, [field]: e.target.value})}
              className="w-full bg-[#242424] border border-[#535353] rounded-md px-3.5 py-3 text-white placeholder-[#6a6a6a] focus:outline-none focus:border-blue-500 focus:bg-[#2a2a2a] transition"
            />
            {field === 'password' && form.password && (
              <div className="flex gap-1 mt-1.5">
                {[1,2,3,4].map(i => (
                  <div key={i} className={`flex-1 h-1 rounded-full transition-colors ${
                    i <= strength(form.password)
                      ? strength(form.password) <= 1 ? 'bg-red-500'
                      : strength(form.password) <= 2 ? 'bg-amber-400'
                      : 'bg-blue-500'
                      : 'bg-[#535353]'
                  }`} />
                ))}
              </div>
            )}
          </div>
        ))}

        {error && <p className="text-red-400 text-sm w-full mb-2">{error}</p>}

        <button
          onClick={handleRegister}
          className="w-full mt-2 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-medium text-sm transition"
        >
          Crear cuenta
        </button>

        <div className="w-full h-px bg-[#282828] my-6" />
        <p className="text-[#a7a7a7] text-sm">
          ¿Ya tienes cuenta?{' '}
          <a href="/" className="text-white underline hover:text-blue-400 transition">Inicia sesión</a>
        </p>
      </div>
    </div>
  )
}