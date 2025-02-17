import Detalhe from './components/DetalhePrato'
import Footer from './components/footer'
import { Restaurante } from './pages/restaurante'
import { GlobalStyle } from './styles/style'
function App() {
  return (
    <>
      <GlobalStyle />
      <Detalhe />
      <Restaurante />
      <Footer />
    </>
  )
}

export default App
