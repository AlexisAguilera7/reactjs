import React, { useState } from "react";

const ItemCount = (stock, onAdd, initial) => {
 const [count, setCount] = useState(initial)
 const suma = () => {
  if (count < stock) {
   setCount(count + 1)
  }

 }
 const resta = () => {
  if (count > 0) {
   setCount(count - 1)
  }
 }
 return (

  <div>
   <div>
    <button onClick={resta}>-</button>
    <span>{count}</span>
    <button onClick={suma}>+</button>
   </div>
   <button disable={count === 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
  </div>
 )
}




export default ItemCount