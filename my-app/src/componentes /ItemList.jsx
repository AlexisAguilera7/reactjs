import React from "react";
import Item from "../componentes /Item";

const ItemList = ({ productos }) => {
 console.log(productos)
 return (
  <div className="d-flex justify-content-around  aling-items-center flex-wrap">
   {productos.map((prod) => <Item key={prod.id} prod={prod} />)}
  </div>
 )
}







export default ItemList
