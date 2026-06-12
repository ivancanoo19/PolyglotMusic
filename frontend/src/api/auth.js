// api/auth

// Funcion register
export async function register(email, username, password) {
    // Esperamos una response, el endpoint es /api/auth/register (AuthController)
    const res = await fetch('/api/auth/register', {
        method: 'POST', // POST ya que vamos a agregar un documento
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password })
    })

    if (res.status === 409) { // Java ya permite retornar los status codes automaticamente
        const data = await res.json()
        throw new Error(data.error)  // conflicto por duplicado de username o email
    }

    if (!res.ok) throw new Error('Error al crear la cuenta')

    return res.json()  // retorna { sessionId, username, userId } para Redis
}

// Funcion login
export async function login(user, password) {
    const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, password })
    })

    if (res.status === 404) {
        const data = await res.json()
        throw new Error(data.error) // usuario no existente
    }

    if (!res.ok) throw new Error('Error al iniciar sesión')

    return res.json()
}

// Funcion logout
export async function logout(sessionId) {
    const res = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId })
    })
    if (!res.ok) throw new Error('Error al cerrar sesión')
}