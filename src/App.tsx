import { useRoutes } from 'react-router-dom'
import '@/assets/styles/App.css'
import router from './router'

function App() {
  const routes = useRoutes(router)
  return routes
}

export default App
