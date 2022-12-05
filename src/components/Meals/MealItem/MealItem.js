import { useContext } from "react"
import styles from "./mealItem.module.css"
import { MealItemForm } from "./MealItemForm"
import { CartContext } from "../../../store/cart-context"

export const MealItem = ({ name, description, price, id }) => {
  const cartCtx = useContext(CartContext)

  const fixedPrice = `${price.toFixed(2)} €`

  const AddToCartHandler = amount => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price
    })
  }

  return (
    <li className={styles.meal}>
      <div >
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{fixedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={AddToCartHandler} />
      </div>
    </li>
  )
}
