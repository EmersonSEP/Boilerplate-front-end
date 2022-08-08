import { Routes, Route} from 'react-router-dom'
import App from './views/App'

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  )
}