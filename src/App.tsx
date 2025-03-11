import { Provider } from 'react-redux'
import Footer from './components/footer'
import Rotas from './Routes'
import { GlobalStyle } from './styles/style'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <Rotas />
        <Footer />
      </Provider>
    </BrowserRouter>
  )
}

export default App
