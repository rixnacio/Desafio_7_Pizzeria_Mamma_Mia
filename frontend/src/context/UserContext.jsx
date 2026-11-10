import { createContext, useContext, useMemo, useState } from 'react'

const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
  // El token es simulado para este hito, tal como indica la pauta.
  const [token, setToken] = useState(true)

  const logout = () => setToken(false)
  const login = () => setToken(true)

  const value = useMemo(() => ({ token, logout, login }), [token])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser debe utilizarse dentro de UserProvider')
  }

  return context
}
