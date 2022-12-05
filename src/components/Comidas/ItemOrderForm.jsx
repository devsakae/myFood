import React from "react";
import Input from "../UI/Input";
import styles from "./ItemOrderForm.module.css";

export default function ItemOrderForm(props) {
  return (
    <form className={styles.form}>
      <Input label="Quantidade" input={{
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }} />
      <button>+ Adicionar</button>
    </form>
  );
}
