import React from 'react'
import { Modal } from '../UI/Modal';
import styles from './Carrinho.module.css';

export const Carrinho = (props) => {
  const cartItems = <ul className={styles['cart-items']}>{[
    { id: 'c1', name: 'Sushi', amount: 2, price: 9.99 },
  ].map((item) => <li>{item.name}</li>)}</ul>;

  return (
    <Modal onClose={ props.onClose }>
      {cartItems}
      <div className={styles.total}>
        <span>Valor total</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={ props.onClose }>Fechar</button>
        <button className={styles.button}>Pedir</button>
      </div>
    </Modal>
  )
}
