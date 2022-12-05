import React, { useContext } from "react";
import { Modal } from "../UI/Modal";
import CartItem from "./CartItem";
import styles from "./Carrinho.module.css";
import { CartContext } from "../../store/cart-context";

export const Carrinho = (props) => {
  const cartCtx = useContext(CartContext);
  const valorTotal = `R$ ${cartCtx.valorTotal.toFixed(2)}`;
  const naoVazio = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};
  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Valor total</span>
        <span>{valorTotal}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Fechar
        </button>
        {naoVazio && <button className={styles.button}>Pedir</button>}
      </div>
    </Modal>
  );
};
