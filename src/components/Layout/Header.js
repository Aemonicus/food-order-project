import React, { Fragment } from 'react'
import styles from "./header.module.css"

import mealsImage from "../../assets/meals.jpg"
import { HeaderCardButton } from './HeaderCardButton'

export const Header = ({ onShowCart }) => {

  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCardButton onClick={onShowCart} />
      </header>
      <div className={styles.main_image}>
        <img src={mealsImage} alt="Meal Image" />
      </div>
    </Fragment >
  )
}
