import styles from "./mealItem.module.css"
import { MealItemForm } from "./MealItemForm"

export const MealItem = ({ name, description, price, id }) => {

  const fixedPrice = `${price.toFixed(2)} €`
  return (
    <li className={styles.meal}>
      <div >
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{fixedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  )
}
