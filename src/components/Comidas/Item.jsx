import React from 'react'
import styles from './Item.module.css';
import ItemOrderForm from './ItemOrderForm';

export default function Item(props) {
  const newPrice = `R$ ${props.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{newPrice}</div>
      </div>
      <div>
        <ItemOrderForm />
      </div>
    </li>
  )
}
