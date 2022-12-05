import React from 'react'
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

export default function HeaderCartButton(props) {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Seu carrinho</span>
      <span className={styles.badge}>3</span>
    </button>
    )
}
