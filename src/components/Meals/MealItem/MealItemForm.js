import { useRef, useState } from "react"
import { Input } from "../../UI/Input"
import styles from "./mealItemForm.module.css"

export const MealItemForm = ({ id, onAddToCart }) => {
  const [ isValid, setIsValid ] = useState(true)
  const amountInputRef = useRef()

  const submitHandler = e => {
    e.preventDefault()

    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount
    if (enteredAmount.trim().length === 0 || enteredAmount < 1) {
      setIsValid(false)
      return
    }

    onAddToCart(enteredAmountNumber)

  }

  const inputObj = {
    id: "amount_" + id,
    type: "number",
    min: "1",
    max: "10",
    step: "1",
    defaultValue: "1"
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input label="Amount" input={inputObj} ref={amountInputRef} />
      <button> Add</button>
      {!isValid && <p>Please enter a valid amount</p>}
    </form>
  )
}
