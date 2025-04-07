import { configureStore } from '@reduxjs/toolkit'
import CarrinhoReducer from './reducers/Carrinho'
import api from '../services/api'
const store = configureStore({
  reducer: {
    carrinho: CarrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
