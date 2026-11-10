import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useUser } from '../context/UserContext'

const imagenes = {
  napolitana: '/img/napolitana.jpg',
  española: '/img/española.jpg',
  salame: '/img/salame.jpg',
  'cuatro estaciones': '/img/cuatro estaciones.jpg',
  bacon: '/img/bacon.jpg',
  'pollo picante': '/img/pollo picante.jpg',
}

const Cart = () => {
  const { cart, total, increaseQuantity, decreaseQuantity, removeFromCart } = useCart()
  const { token } = useUser()

  return (
    <main className="container py-5 cart-page">
      <section className="cart-container mx-auto">
        <h2 className="h4 mb-4">Detalles del pedido:</h2>

        {cart.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-secondary">Tu carrito está vacío.</p>
            <Link to="/" className="btn btn-outline-dark">Ver nuestras pizzas</Link>
          </div>
        ) : (
          <div className="d-flex flex-column gap-3">
            {cart.map((pizza) => (
              <div className="cart-item d-flex align-items-center gap-3" key={pizza.id}>
                <img
                  className="cart-image"
                  src={imagenes[pizza.name] || pizza.img}
                  alt={`Pizza ${pizza.name}`}
                />
                <span className="text-capitalize flex-grow-1">{pizza.name}</span>
                <strong className="cart-price">${(pizza.price * pizza.count).toLocaleString('es-CL')}</strong>
                <button
                  className="btn btn-outline-danger btn-sm quantity-button"
                  type="button"
                  onClick={() => decreaseQuantity(pizza.id)}
                  aria-label={`Disminuir ${pizza.name}`}
                >−</button>
                <span className="quantity">{pizza.count}</span>
                <button
                  className="btn btn-outline-primary btn-sm quantity-button"
                  type="button"
                  onClick={() => increaseQuantity(pizza.id)}
                  aria-label={`Aumentar ${pizza.name}`}
                >+</button>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  type="button"
                  onClick={() => removeFromCart(pizza.id)}
                  aria-label={`Eliminar ${pizza.name} del carrito`}
                  title="Eliminar producto"
                >✕</button>
              </div>
            ))}
          </div>
        )}

        <hr className="my-4" />
        <h3 className="h4 mb-3">Total: ${total.toLocaleString('es-CL')}</h3>
        <button
          className="btn btn-dark"
          type="button"
          disabled={!token || cart.length === 0}
          title={!token ? 'Debes iniciar sesión para pagar' : ''}
        >
          Pagar
        </button>
        {!token && (
          <p className="text-danger mt-2 mb-0">
            Debes iniciar sesión para habilitar el pago.
          </p>
        )}
      </section>
    </main>
  )
}

export default Cart
