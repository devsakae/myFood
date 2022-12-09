import React, { useState } from "react";
import styles from "./Disponiveis.module.css";
import Card from "../UI/Card";
import Item from "./Item";
import { useEffect } from "react";
const FIREBASE_URL_FOODDB = 'https://myfood-3fc5a-default-rtdb.firebaseio.com/food.json';

export default function Disponiveis() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchFood = async () => {
      const response = await fetch(FIREBASE_URL_FOODDB);
      if (!response.ok) {
        throw new Error('Fetch failed');
      }
      const data = await response.json();
      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        })
      }
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
