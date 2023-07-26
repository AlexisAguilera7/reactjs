import React from "react";
import ItemCount from "./ItemCount";


const ItemDetail = ({ producto }) => {
 const onAdd = (cantidad) => {
  console.log(`compraste ${cantidad}`)

 }

 return (
  <div>
   <h3>{producto.name}</h3>
   <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
  </div>
 )
}


export default ItemDetail