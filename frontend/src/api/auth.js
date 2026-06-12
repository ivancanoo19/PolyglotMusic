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