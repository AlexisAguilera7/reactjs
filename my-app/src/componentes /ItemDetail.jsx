import React from "react";
import ItemCount from "./ItemCount";
import { Card } from "react-bootstrap";

const ItemDetail = ({ producto }) => {
 const onAdd = (cantidad) => {
  console.log(`compraste ${cantidad}`)

 }

 return (
  <div>
   <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={producto.img} />
    <Card.Body>
     <Card.Title>{producto.name}</Card.Title>
     <Card.Text>
      {producto.description}
     </Card.Text>
     <Card.Text>${producto.price}</Card.Text>
    </Card.Body>
    <h3>{producto.name}</h3>
    <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
   </Card>

  </div>
 )
}


export default ItemDetail