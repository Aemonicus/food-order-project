import { Fragment } from "react"
import styles from "./card.module.css"

export const Card = ({ children }) => {
  return (
    <div className={styles.card}>{children}</div >
  )
}
