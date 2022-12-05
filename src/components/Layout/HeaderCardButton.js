import styles from "./headerCardButton.module.css"
import { CartIcon } from "../Cart/CartIcon"


export const HeaderCardButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  )
}
