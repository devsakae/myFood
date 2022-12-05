import React, { useState } from 'react';
import Comidas from './components/Comidas/Comidas';
import Header from './components/Layout/Header';
import { Carrinho } from './components/Cart/Carrinho';
import { CartProvider } from './store/CartProvider';

function App() {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <CartProvider>
      { showCart && <Carrinho onClose={ hideCartHandler } /> }
      <Header onShowCart={ showCartHandler } />
      <main>
        <Comidas />
      </main>
    </CartProvider>
  );
}

export default App;
