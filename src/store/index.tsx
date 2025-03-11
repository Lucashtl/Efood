import { configureStore } from '@reduxjs/toolkit'
import CarrinhoReducer from './reducers/Carrinho'

const store = configureStore({
  reducer: {
    carrinho: CarrinhoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
