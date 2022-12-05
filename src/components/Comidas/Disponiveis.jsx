import React from 'react'
import styles from './Disponiveis.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Peixe fresco todavida',
    price: 39.90,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'Lombo de porco',
    price: 12.4,
  },
  {
    id: 'm3',
    name: 'X-salada',
    description: 'Criciumense de verdade',
    price: 14.90,
  },
  {
    id: 'm4',
    name: 'Tábua',
    description: 'Alegra todo mundo',
    price: 65.90,
  },
];

export default function Disponiveis() {
  const listaDisponiveis = DUMMY_MEALS.map(disp => <li>{disp.name}</li>);
  
  return (
    <section className={styles.meals}>
      <ul>
        { listaDisponiveis }
      </ul>
    </section>
  )
}
