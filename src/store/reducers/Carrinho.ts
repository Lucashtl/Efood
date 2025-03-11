import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Prato from '../../models/Pratos'

type props = {
  itens: Omit<Prato, 'nota' | 'destaque'>[]
  Abrir: boolean
}

const initialState: props = {
  itens: [],
  Abrir: false
}

const Carrinhoslicer = createSlice({
  name: 'Carrinho',
  initialState,
  reducers: {
    adcionar: (
      state,
      action: PayloadAction<Omit<Prato, 'nota' | 'destaque'>>
    ) => {
      const pedido = state.itens.find((pe) => pe.id === action.payload.id)

      if (!pedido) {
        state.itens.push(action.payload)
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
    }
  }
})

export default Carrinhoslicer.reducer
export const { abrir, adcionar, fechar, remover, limpaCarrinho } =
  Carrinhoslicer.actions
