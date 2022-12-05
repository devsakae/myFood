import React, { useReducer } from 'react';
import { CartContext } from './cart-context';

const defaultCartState = {
  items: [],
  valorTotal: 0
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount = state.valorTotal + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingCartItems = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItems) {
      const updatedItem = {
        ...existingCartItems,
        amount: existingCartItems.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      valorTotal: updatedTotalAmount
    };
  }
  return defaultCartState;
};

export const CartProvider = props => {
  const [meuCarrinho, dispatchCarrinho] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = item => {
    dispatchCarrinho({type: 'ADD', item: item});
  };
  
  const removeItemFromCartHandler = id => {
    dispatchCarrinho({type: 'REMOVE', id: id});
  };

  const cartContext = {
    items: meuCarrinho.items,
    valorTotal: meuCarrinho.valorTotal,
    adicionarItem: addItemToCartHandler,
    removerItem: removeItemFromCartHandler
  };

  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
}
