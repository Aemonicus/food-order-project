import styles from "./headerCardButton.module.css"
import { CartIcon } from "../Cart/CartIcon"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../store/cart-context"


export const HeaderCardButton = ({ onClick }) => {
  const [ btnIsAnimated, setBtnIsAnimated ] = useState(false)
  // const [ numberOfCartItems, setNumberOfCartItems ] = useState(0)
  const cartCtx = useContext(CartContext)

  const { items } = cartCtx

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => currNumber + item.amount, 0)
  // setNumberOfCartItems(reducedValue)

  const btnClasses = `${styles.button} ${btnIsAnimated ? styles.bump : ""}`

  useEffect(() => {
    if (cartCtx.items.length === 0) return
    setBtnIsAnimated(true)

    const timer = setTimeout(() => setBtnIsAnimated(false), 300)

    return () => clearTimeout(timer)
  }, [ items ])

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={styles.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  )
}
