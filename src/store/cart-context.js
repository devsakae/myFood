import React from "react";

export const CartContext = React.createContext({
  items: [],
  valorTotal: 0,
  adicionarItem: (item) => {},
  removerItem: (id) => {}
});