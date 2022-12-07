import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import styles from "./ItemOrderForm.module.css";

export default function ItemOrderForm(props) {
  const [validAmount, setValidAmount] = useState(true);
  const inputValue = useRef();
  
  const submitForm = event => {
    event.preventDefault();
    const enteredAmount = inputValue.current.value;
    const enteredAmountConverted = +enteredAmount;
    if (enteredAmount.trim().length === 0 || enteredAmountConverted < 1 || enteredAmountConverted > 5) {
      setValidAmount(false);
      return;
    }
    props.onAddToCart(enteredAmountConverted);
  };

  return (
    <form className={styles.form} onSubmit={ submitForm }>
      <Input
        ref={ inputValue }
        label="Quantidade"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
      }} />
      <button>+ Adicionar</button>
      { !validAmount && <p>Digite um valor válido (1 a 5)</p> }
    </form>
  );
}
