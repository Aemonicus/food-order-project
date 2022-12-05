import styles from "./cart.module.css"
import { Modal } from "../UI/Modal"

export const Cart = () => {

  const cartItems = <ul className={styles[ "cart-items" ]}>{
    [ { id: "c1", name: "sushi", amount: 2, price: 13 } ].map(item => <li>{item.name}</li>)
  }</ul>
  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>Total Amount
        <div>35 €</div>
      </div>
      <div className={styles.actions}>
        <button className={styles[ "button--alt" ]}>Close</button>
        <button className={styles[ "button" ]}>Order</button>
      </div>
    </Modal>

  )
}
