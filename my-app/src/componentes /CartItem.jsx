import React from 'react'
import { Button, Col, Image, ListGroupItem, Row } from 'react-bootstrap'
import { useCart } from '../context/CartContext'

const CartItem = ({ producto }) => {
 const { removeItem } = useCart()
 const eliminarProducto = () => {
  removeItem(producto)
 }
 return (
  <ListGroupItem>
   <Row>
    <Col lg={1}><Image fluid src={producto.img} /></Col>
    <Col>{producto.name}</Col>
    <Col>${producto.precio}</Col>
    <Col>{producto.cantidad}</Col>
    <Col>${producto.precio * producto.cantidad}</Col>
    <Col><Button onClick={eliminarProducto} variant="danger">x</Button> </Col>
   </Row>

  </ListGroupItem>



 )
}

export default CartItem