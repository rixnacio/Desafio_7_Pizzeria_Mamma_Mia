import { Link } from 'react-router-dom'

const NotFound = () => (
  <main className="container py-5 text-center not-found-page">
    <div className="not-found-card mx-auto bg-white rounded shadow-sm p-5">
      <p className="display-1 mb-0">🍕</p>
      <h1 className="display-4 fw-bold">404</h1>
      <h2 className="h4 mb-3">¡Ups! Esta página no existe</h2>
      <p className="text-secondary mb-4">
        Parece que la dirección que buscas no está en nuestro menú.
      </p>
      <Link className="btn btn-dark" to="/">Volver al inicio</Link>
    </div>
  </main>
)

export default NotFound
