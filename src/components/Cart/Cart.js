import styles from "./cart.module.css"
import { Modal } from "../UI/Modal"
import { CartContext } from "../../store/cart-context"
import { Fragment, useContext, useState } from "react"
import CartItem from "./CartItem"
import { Checkout } from "./Checkout"

export const Cart = ({ hideCartHandler }) => {
  const [ isCheckout, setIsCheckout ] = useState(false)
  const [ isSubmitting, setIsSubmitting ] = useState(false)
  const [ didSubmit, setDidSubmit ] = useState(false)

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

  const submitOrderHandler = async userData => {
    setIsSubmitting(true)
    await fetch("https://food-app-cbada-default-rtdb.europe-west1.firebasedatabase.app/orders.json", {
      method: "post",
      body: JSON.stringify({ user: userData, orderedItems: cartCtx.items })
    })
    setIsSubmitting(false)
    setDidSubmit(true)
    cartCtx.clearCart()
  }

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

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={styles.total}>Total Amount
        <div>{totalAmount}</div>
      </div>
      {isCheckout && <Checkout onConfirm={submitOrderHandler} hideCartHandler={hideCartHandler} />}
      {!isCheckout && <div className={styles.actions}>
        <button className={styles[ "button--alt" ]} onClick={hideCartHandler}>Close</button>
        {hasItems && <button className={styles[ "button" ]} onClick={orderHandler}>Order</button>}
      </div>}
    </Fragment>
  )

  const isSubmittingModalContent = <p>Sending order data...</p>

  const didSubmitModalContent = (
    <Fragment>
      <p> Successfully sent the order !</p>
      <div className={styles.actions}>
        <button className={styles[ "button" ]} onClick={hideCartHandler}>Close</button>
      </div>
    </Fragment>
  )


  return (
    <Modal onClose={hideCartHandler}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>

  )
}
