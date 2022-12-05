import styles from "./mealItem.module.css"

export const MealItem = ({ name, description, price }) => {

  const fixedPrice = `${price.toFixed(2)} €`
  return (
    <li className={styles.meal}>
      <div >
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{fixedPrice}</div>
      </div>
      <div></div>
    </li>
  )
}
