import styles from "./headerCardButton.module.css"
import { CartIcon } from "../Cart/CartIcon"


export const HeaderCardButton = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  )
}
