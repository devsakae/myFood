import React from "react";
import styles from "./Disponiveis.module.css";
import Card from "../UI/Card";
import Item from "./Item";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Peixe fresco todavida",
    price: 39.9,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "Lombo de porco",
    price: 12.4,
  },
  {
    id: "m3",
    name: "X-salada",
    description: "Criciumense de verdade",
    price: 14.9,
  },
  {
    id: "m4",
    name: "Tábua",
    description: "Alegra todo mundo",
    price: 65.9,
  },
];

export default function Disponiveis() {
  const listaDisponiveis = DUMMY_MEALS.map((disp) => (
    <Item
      key={disp.id}
      name={disp.name}
      description={disp.description}
      price={disp.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{listaDisponiveis}</ul>
      </Card>
    </section>
  );
}
