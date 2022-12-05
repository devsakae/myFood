import { Fragment } from 'react'
import myfoodbanner from '../../assets/meals.jpg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

export default function Header(props) {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>myFood</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={ myfoodbanner } alt="myFood - Seu aplicativo de delivery preferido" />
      </div>
    </Fragment>
  )
}
