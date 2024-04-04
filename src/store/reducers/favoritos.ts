import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoSlice = {
  itens: Produto[]
}

const initialState: FavoritoSlice = {
  itens: []
}

const favoritarSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, actions: PayloadAction<Produto>) => {
      const itensFavoritos = actions.payload
      if (state.itens.find((p) => p.id === itensFavoritos.id)) {
        alert('Item já adicionado aos favoritos!')
      } else {
        state.itens.push(itensFavoritos)
      }
    }
  }
})

export const { favoritar } = favoritarSlice.actions
export default favoritarSlice.reducer

// function favoritar(produto: Produto) {
//   if (favoritos.find((p) => p.id === produto.id)) {
//     const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
//     setFavoritos(favoritosSemProduto)
//   } else {
//     setFavoritos([...favoritos, produto])
//   }
// }
