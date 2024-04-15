import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoSlice = {
  itens: Produto[]
}

const initialState: FavoritoSlice = {
  itens: []
}

export type EstaFavoritos = {
  favoritos: Produto[]
}

const favoritarSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, actions: PayloadAction<Produto>) => {
      const itensFavoritos = actions.payload
      if (state.itens.find((p) => p.id === itensFavoritos.id)) {
        alert('Item já adicionado aos favoritos.')
      } else {
        state.itens.push(itensFavoritos)
      }
    }
  }
})

export const { favoritar } = favoritarSlice.actions
export default favoritarSlice.reducer
