import styles from "./headerCardButton.module.css"
import { CartIcon } from "../Cart/CartIcon"
import { useContext } from "react"
import { CartContext } from "../../store/cart-context"


export const HeaderCardButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => currNumber + item.amount, 0)

  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  )
}
