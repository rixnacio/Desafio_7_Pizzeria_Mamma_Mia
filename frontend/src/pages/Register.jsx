import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage('')
    setError('')

    if (!email || !password || !confirmPassword) {
      setError('Todos los campos son obligatorios.')
      return
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.')
      return
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.')
      return
    }

    setMessage('Registro exitoso. Ahora puedes iniciar sesión.')
    setTimeout(() => navigate('/login'), 900)
  }

  return (
    <main className="form-page container py-5">
      <div className="form-container">
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="register-email" className="form-label">Email</label>
            <input
              id="register-email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="register-password" className="form-label">Password</label>
            <input
              id="register-password"
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="register-confirm" className="form-label">Confirmar contraseña</label>
            <input
              id="register-confirm"
              type="password"
              className="form-control"
              placeholder="Confirma tu contraseña"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">Register</button>
        </form>

        {error && <div className="alert alert-danger mt-3 mb-0">{error}</div>}
        {message && <div className="alert alert-success mt-3 mb-0">{message}</div>}
      </div>
    </main>
  )
}

export default Register
