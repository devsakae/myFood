import React, { useContext, useState } from "react";
import { Modal } from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import styles from "./Carrinho.module.css";
import { CartContext } from "../../store/cart-context";

const FIREBASE_URL = 'https://myfood-3fc5a-default-rtdb.firebaseio.com/pedidos.json';

export const Carrinho = (props) => {
  const [checkingOut, setCheckingOut] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [doneSubmitting, setDoneSubmitting] = useState(false);

  const cartCtx = useContext(CartContext);
  const valorTotal = `R$ ${cartCtx.valorTotal.toFixed(2)}`;
  const naoVazio = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removerItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.adicionarItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles['cart-items']}>
      { cartCtx.items?.map((item) => (
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

  const checkoutHandler = () => {
    setCheckingOut(true);
  };

  const submitOrder = async (userData) => {
    setSubmitting(true);
    const response = await fetch(FIREBASE_URL, {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        pedido: cartCtx.items
      }),
    });
    if (!response.ok) {
      console.log('Something went wrong!');
    }
    setSubmitting(false);
    setDoneSubmitting(true);
    cartCtx.limparCarrinho();
  }

  const confirmBtns = (
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={props.onClose}>Fechar</button>
      { naoVazio && <button className={styles.button} onClick={ checkoutHandler }>Pedir</button>}
    </div>
  )

  const cartModalContent = (
    <>
    { cartItems }
      <div className={styles.total}>
        <span>Valor total</span>
        <span>{valorTotal}</span>
      </div>
      { checkingOut ? <Checkout onSubmit={ submitOrder } onCancel={props.onClose} /> : confirmBtns }
    </>
  )

  const submittingModalContent = (<p>Enviando pedido....</p>);
  const submitedModalContent = (
    <>
      <p>Obrigado por aguardar! Seu pedido foi realizado</p>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>Fechar</button>
      </div>
      </>
  );

  return (
    <Modal onClose={props.onClose}>
      { !submitting && !doneSubmitting && cartModalContent }
      { submitting && submittingModalContent }
      { !submitting && doneSubmitting && submitedModalContent }
    </Modal>
  );
};
