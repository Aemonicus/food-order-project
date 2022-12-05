import React, { Fragment } from 'react'
import styles from "./header.module.css"

import mealsImage from "../../assets/meals.jpg"
import { HeaderCardButton } from './HeaderCardButton'

export const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCardButton />
      </header>
      <div className={styles.main_image}>
        <img src={mealsImage} alt="Meal Image" />
      </div>
    </Fragment >
  )
}
