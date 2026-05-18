import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Learn3dPage from './pages/Learn3dPage'
import useLenis from './hooks/useLenis'

export default function App() {
  useLenis()

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/3d-learn" element={<Learn3dPage />} />
    </Routes>
  )
}
