import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import favoritosReducer from './reducers/favoritos'

export const store = configureStore({
  // o reducer é o RootReducer
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
