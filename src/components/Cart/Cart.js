import styles from "./cart.module.css"
import { Modal } from "../UI/Modal"

export const Cart = ({ hideCartHandler }) => {

  const cartItems = <ul className={styles[ "cart-items" ]}>{
    [ { id: "c1", name: "sushi", amount: 2, price: 13 } ].map(item => <li key={item.id}>{item.name}</li>)
  }</ul>
  return (
    <Modal onClose={hideCartHandler}>
      {cartItems}
      <div className={styles.total}>Total Amount
        <div>35 €</div>
      </div>
      <div className={styles.actions}>
        <button className={styles[ "button--alt" ]} onClick={hideCartHandler}>Close</button>
        <button className={styles[ "button" ]}>Order</button>
      </div>
    </Modal>

  )
}
