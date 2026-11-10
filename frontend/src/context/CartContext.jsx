import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (pizza) => {
    setCart((currentCart) => {
      const pizzaExists = currentCart.some((item) => item.id === pizza.id)

      if (pizzaExists) {
        return currentCart.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        )
      }

      return [...currentCart, { ...pizza, count: 1 }]
    })
  }

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    )
  }

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0)
    )
  }

  const removeFromCart = (id) => {
    setCart((currentCart) => currentCart.filter((pizza) => pizza.id !== id))
  }

  const total = useMemo(
    () => cart.reduce((sum, pizza) => sum + pizza.price * pizza.count, 0),
    [cart]
  )

  const value = {
    cart,
    total,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart debe utilizarse dentro de CartProvider')
  }

  return context
}
