import React from 'react'
import myfoodbanner from '../../assets/meals.jpg';

export default function Header(props) {
  return (
    <React.Fragment>
      <header>
        <h1>myFood</h1>
        <button>Carrinho</button>
      </header>
      <div>
        <img src={ myfoodbanner } alt="myFood" />
      </div>
    </React.Fragment>
  )
}
