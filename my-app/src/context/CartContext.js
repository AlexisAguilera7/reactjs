import React, { createContext, useContext, useState } from 'react'

const cartContext = createContext()

export const CartProvider = ({ children }) => {

 const [cartItem, setCartItem] = useState([])
 const addItem = (item, cantidad) => {
  const product = cartItem.find(product => product.id === item.id)
  console.log(product)
  console.log(item)
  if (product) {
   const position = cartItem.indexOf(product)
   product.cantidad = product.cantidad + cantidad
   cartItem[position] = product
   setCartItem([...cartItem])
  } else {
   setCartItem([...cartItem, { ...item, cantidad: cantidad }])
  }
 }

 const removeItem = (item) => {
  setCartItem(cartItem.filter(product => product.id !== item.id))
 }
 return (
  <cartContext.Provider value={{ cartItem, addItem, removeItem }}>
   {children}
  </cartContext.Provider >

 )

}


export const useCart = () => {
 return useContext(cartContext)
}


