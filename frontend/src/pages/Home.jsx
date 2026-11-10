import { useEffect, useState } from 'react'
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas')
        if (!response.ok) throw new Error('No fue posible obtener las pizzas.')
        const data = await response.json()
        setPizzas(data)
      } catch (err) {
        setError('No se pudieron cargar las pizzas. Comprueba que el backend esté funcionando.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    getPizzas()
  }, [])

  return (
    <main>
      <Header />
      <section className="container py-5">
        {loading && <p className="text-center">Cargando pizzas...</p>}
        {error && <p className="alert alert-danger text-center">{error}</p>}
        {!loading && !error && (
          <div className="row g-4 justify-content-center">
            {pizzas.map((pizza) => (
              <div className="col-12 col-md-6 col-lg-4" key={pizza.id}>
                <CardPizza pizza={pizza} />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Home
