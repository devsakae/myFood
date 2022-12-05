import React, { useContext } from 'react';
import styles from './Item.module.css';
import ItemOrderForm from './ItemOrderForm';
import {CartContext} from '../../store/cart-context';

export default function Item(props) {
  const cartCtx = useContext(CartContext);
  const newPrice = `R$ ${props.price.toFixed(2)}`;
  const addToCartHandler = amount => {
    cartCtx.adicionarItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{newPrice}</div>
      </div>
      <div>
        <ItemOrderForm onAddToCart={ addToCartHandler } />
      </div>
    </li>
  )
}
