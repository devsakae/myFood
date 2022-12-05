import React from 'react'
import { CartContext } from './cart-context'

export const CartProvider = props => {
  const addItemToCartHandler = item => {

  };
  const removeItemFromCartHandler = id => {

  };

  const cartContext = {
    items: [],
    valorTotal: 0,
    adicionarItem: addItemToCartHandler,
    removerItem: removeItemFromCartHandler
  };

  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
}
