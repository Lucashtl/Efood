import { Provider, useSelector } from 'react-redux'
import Footer from './components/footer'
import Rotas from './Routes'
import { GlobalStyle } from './styles/style'
import { BrowserRouter } from 'react-router-dom'
import store, { RootReducer } from './store'
import CartPagamento from './components/cardPagamento'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <CartCheckout />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

function CartCheckout() {
  const sidebar = useSelector((state: RootReducer) => state.carrinho.sidebar)
  return <CartPagamento sidebar={sidebar} />
}

export default App
