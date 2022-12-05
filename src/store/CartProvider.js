import React, { useReducer } from 'react'
import { CartContext } from './cart-context'

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item)
    const updatedAmount = state.totalAmount + (action.item.amount * action.item.price)
    return {
      items: updatedItems,
      totalAmount: updatedAmount
    }
  }
  if (action.type === "REMOVE")
    return defaultCartState
}

export const CartProvider = ({ children }) => {
  const [ cartState, dispatchCartAction ] = useReducer(cartReducer, defaultCartState)

  const addItemToCartHandler = item => {
    dispatchCartAction({ type: "ADD", item })
  }

  const removeItemFromCartHandler = id => {
    dispatchCartAction({ type: "REMOVE", id })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }
  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  )
}
