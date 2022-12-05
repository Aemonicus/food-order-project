import { Input } from "../../UI/Input"
import styles from "./mealItemForm.module.css"

export const MealItemForm = ({ id }) => {

  const inputObj = {
    id: "amount_" + id,
    type: "number",
    min: "1",
    max: "10",
    step: "1",
    defaultValue: "1"
  }

  return (
    <form className={styles.form}>
      <Input label="Amount" input={inputObj} />
      <button> Add</button>
    </form>
  )
}
