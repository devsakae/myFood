import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon';
import { CartContext } from '../../store/cart-context';
import styles from './HeaderCartButton.module.css';

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const totalDeItens = cartCtx.items.reduce((curr, acc) => {
    return curr + acc.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Seu carrinho</span>
      <span className={styles.badge}>{ totalDeItens }</span>
    </button>
    )
}
