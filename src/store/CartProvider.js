import React, { useReducer } from 'react'
import { CartContext } from './cart-context'

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedAmount = state.totalAmount + (action.item.amount * action.item.price)

    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
    const existingCartItem = state.items[ existingCartItemIndex ]
    let updatedItems

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }
      updatedItems = [ ...state.items ]
      updatedItems[ existingCartItemIndex ] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount
    }
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)
    const existingCartItem = state.items[ existingCartItemIndex ]
    const updatedTotalAmount = state.totalAmount - existingCartItem.price

    let updatedItems
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id)
    } else {
      const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 }
      updatedItems = [ ...state.items ]
      updatedItems[ existingCartItemIndex ] = updatedItem
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  if (action.type === "CLEAR") {
    return {
      items: [],
      totalAmount: 0
    }
  }

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

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  }
  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  )
}
