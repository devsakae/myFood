import React, { useState, useEffect } from "react";
import styles from "./Disponiveis.module.css";
import Card from "../UI/Card";
import Item from "./Item";

const cardapio = [
  {
    id: 1,
    name: 'X-Salada',
    description: 'Um delicioso X-Salada, completo com tudo que você precisa',
    price: 28,
  },
  {
    id: 2,
    name: 'Porção de batatas fritas',
    description: 'Uma porção de 400g de batatas fritas',
    price: 18,
  },
  {
    id: 3,
    name: 'Skol garrafa de 1 litro',
    description: 'Pra descer redondo com a comida',
    price: 15,
  },
]

export default function Disponiveis() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchFood = async () => {
      const loadedMeals = cardapio;
      setLoading(false);
      setMenu(loadedMeals);
    };
    fetchFood().catch((err) => {
      setLoading(false);
      setHttpError(err.message);
    });
  }, []);

  const listaDisponiveis = menu?.map((disp) => (
    <Item
      id={disp.id}
      key={disp.id}
      name={disp.name}
      description={disp.description}
      price={disp.price}
    />
  ));

  if (loading) {
    return (
      <section className={styles.loadingFood}>
        <p>Carregando...</p>
      </section>
    )
  }

  if (httpError) {
    return (
      <section className={styles.MealsError}>
        <p>{ httpError }</p>
      </section>
    )
  }
  
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{listaDisponiveis}</ul>
      </Card>
    </section>
  );
}
