import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type props = {
  itens: Omit<Product, 'descricao' | 'porcao'>[]
  Abrir: boolean
  sidebar: 'cart' | 'delivery' | 'payment' | 'confirm'
  totalPrice: number
}

const initialState: props = {
  itens: [],
  Abrir: false,
  sidebar: 'cart',
  totalPrice: 0
}

const Carrinhoslicer = createSlice({
  name: 'Carrinho',
  initialState,
  reducers: {
    adcionar: (
      state,
      action: PayloadAction<Omit<Product, 'descricao' | 'porcao'>>
    ) => {
      const pedido = state.itens.find((pe) => pe.id === action.payload.id)

      if (!pedido) {
        state.itens.push(action.payload)
        state.totalPrice = state.itens.reduce(
          (total, item) => total + item.preco,
          0
        )
      } else {
        alert('O item já esta no carrinho')
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((p) => p.id !== action.payload)
    },
    limpaCarrinho: (state) => {
      state.itens = []
    },

    abrir: (state) => {
      state.Abrir = true
    },
    fechar: (state) => {
      state.Abrir = false
    },
    setSidebar: (
      state,
      action: PayloadAction<'cart' | 'delivery' | 'payment' | 'confirm'>
    ) => {
      state.sidebar = action.payload
    },
    setTotalPrice: (state) => {
      state.totalPrice = state.itens.reduce(
        (total, item) => total + item.preco,
        0
      )
    }
  }
})

export default Carrinhoslicer.reducer
export const {
  abrir,
  adcionar,
  fechar,
  remover,
  limpaCarrinho,
  setSidebar,
  setTotalPrice
} = Carrinhoslicer.actions
