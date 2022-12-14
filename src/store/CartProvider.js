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
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.valorTotal - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { 
      items: updatedItems,
      valorTotal: updatedTotalAmount
    }
  }
  if (action.type === "CLEAR") {
    return defaultCartState;
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

  const clearCartHandler = () => {
    dispatchCarrinho({ type: 'CLEAR' })
  }

  const cartContext = {
    items: meuCarrinho.items,
    valorTotal: meuCarrinho.valorTotal,
    adicionarItem: addItemToCartHandler,
    removerItem: removeItemFromCartHandler,
    limparCarrinho: clearCartHandler
  };

  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
}
