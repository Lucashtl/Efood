import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Restaurante } from './pages/restaurante'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Restaurante" element={<Restaurante />} />
  </Routes>
)

export default Rotas
