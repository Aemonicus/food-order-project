import styles from "./cart.module.css"
import { Modal } from "../UI/Modal"
import { CartContext } from "../../store/cart-context"
import { useContext, useState } from "react"
import CartItem from "./CartItem"
import { Checkout } from "./Checkout"

export const Cart = ({ hideCartHandler }) => {
  const [ isCheckout, setIsCheckout ] = useState(false)
  const cartCtx = useContext(CartContext)

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)} €`
  const hasItems = cartCtx.items.length > 0

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id)
  }

  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const orderHandler = () => setIsCheckout(true)

  const cartItems = <ul className={styles[ "cart-items" ]}>{
    cartCtx.items.map(item =>
      <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />)
  }</ul>

  return (
    <Modal onClose={hideCartHandler}>
      {cartItems}
      <div className={styles.total}>Total Amount
        <div>{totalAmount}</div>
      </div>
      {isCheckout && <Checkout hideCartHandler={hideCartHandler} />}
      {!isCheckout && <div className={styles.actions}>
        <button className={styles[ "button--alt" ]} onClick={hideCartHandler}>Close</button>
        {hasItems && <button className={styles[ "button" ]} onClick={orderHandler}>Order</button>}
      </div>}
    </Modal>

  )
}
