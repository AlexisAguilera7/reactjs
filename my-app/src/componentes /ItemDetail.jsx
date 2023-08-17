import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Description from "./ItemDetail/Description";
import ItemQuantitySelector from "./ItemDetail/ItemQuantitySelector";
import { AddItemButton } from "./ItemDetail/AddItemButton";
import { useCart } from "../context/CartContext";

const ItemDetail = ({ data }) => {
 const { addItem } = useCart()
 const onAdd = (cantidad) => {
  addItem(data, cantidad)
 }
 const [cantidad, setCantidad] = useState(1)

 return (
  <div className="d-flex justify-content-around  aling-items-center flex-wrap">
   <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={data.img} />
    <Card.Body>
     <Card.Title>{data.name}</Card.Title>
     <Card.Text>
      <Description description={data.description} />
     </Card.Text>
     <Card.Text>${data.precio}</Card.Text>
    </Card.Body>
    <ItemQuantitySelector stock={data.stock} cantidad={cantidad} setCantidad={setCantidad} />
    <AddItemButton cantidad={cantidad} onAdd={onAdd} />
   </Card>

  </div >
 )
}


export default ItemDetail