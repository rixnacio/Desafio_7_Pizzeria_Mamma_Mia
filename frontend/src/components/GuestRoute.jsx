import { Navigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

const GuestRoute = ({ children }) => {
  const { token } = useUser()

  return token ? <Navigate to="/" replace /> : children
}

export default GuestRoute
