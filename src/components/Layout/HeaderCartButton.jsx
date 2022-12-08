import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon';
import { CartContext } from '../../store/cart-context';
import styles from './HeaderCartButton.module.css';

export default function HeaderCartButton(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const totalDeItens = cartCtx.items.reduce((curr, acc) => {
    return curr + acc.amount;
  }, 0);

  const btnStyles = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <button className={btnStyles} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Seu carrinho</span>
      <span className={styles.badge}>{ totalDeItens }</span>
    </button>
    )
}
