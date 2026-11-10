import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const imagenes = {
  napolitana: '/img/napolitana.jpg',
  española: '/img/española.jpg',
  salame: '/img/salame.jpg',
  'cuatro estaciones': '/img/cuatro estaciones.jpg',
  bacon: '/img/bacon.jpg',
  'pollo picante': '/img/pollo picante.jpg',
}

const Pizza = () => {
  const { id } = useParams()
  const [pizza, setPizza] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const getPizza = async () => {
      setLoading(true)
      setError('')
      setPizza(null)

      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`)

        if (!response.ok) {
          throw new Error('No fue posible obtener la pizza.')
        }

        const data = await response.json()
        setPizza(data)
      } catch (err) {
        setError('No se pudo cargar la pizza. Comprueba que el backend esté funcionando.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    getPizza()
  }, [id])

  if (loading) {
    return <main className="container py-5 text-center">Cargando pizza...</main>
  }

  if (error) {
    return <main className="container py-5"><p className="alert alert-danger">{error}</p></main>
  }

  if (!pizza) return null

  return (
    <main className="container py-5">
      <section className="row g-4 align-items-center bg-white rounded shadow-sm p-3 p-md-4">
        <div className="col-12 col-md-6">
          <img
            src={imagenes[pizza.name] || pizza.img}
            alt={`Pizza ${pizza.name}`}
            className="img-fluid rounded pizza-detail-image"
          />
        </div>

        <div className="col-12 col-md-6">
          <h1 className="text-capitalize mb-3">Pizza {pizza.name}</h1>
          <p>{pizza.desc}</p>
          <h2 className="h4">Ingredientes:</h2>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={`${ingredient}-${index}`} className="text-capitalize">{ingredient}</li>
            ))}
          </ul>
          <h2 className="h4 mt-4">Precio: ${pizza.price.toLocaleString('es-CL')}</h2>
        </div>
      </section>
    </main>
  )
}

export default Pizza
