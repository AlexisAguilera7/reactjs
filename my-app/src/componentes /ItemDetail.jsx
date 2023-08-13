import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Description from "./ItemDetail/Description";
import ItemQuantitySelector from "./ItemDetail/ItemQuantitySelector";
import { AddItemButton } from "./ItemDetail/AddItemButton";
import { useCart } from "../context/CartContext";

const ItemDetail = ({ producto }) => {
 const { addItem } = useCart()
 const onAdd = (cantidad) => {
  addItem(producto, cantidad)
 }
 const [cantidad, setCantidad] = useState(1)

 return (
  <div>
   <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={producto.img} />
    <Card.Body>
     <Card.Title>{producto.name}</Card.Title>
     <Card.Text>
      <Description description={producto.description} />
     </Card.Text>
     <Card.Text>${producto.precio}</Card.Text>
    </Card.Body>
    <ItemQuantitySelector stock={producto.stock} cantidad={cantidad} setCantidad={setCantidad} />
    <AddItemButton cantidad={cantidad} onAdd={onAdd} />
   </Card>

  </div >
 )
}


export default ItemDetail