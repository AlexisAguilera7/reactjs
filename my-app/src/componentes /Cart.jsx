import React from 'react'
import { useCart } from '../context/CartContext'
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import CartItem from './CartItem'

const Cart = () => {
 const { cartItem } = useCart()
 const total = cartItem.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)
 return (

  <>
   <h2>Carrito</h2>
   <ListGroup>
    <ListGroupItem>
     <Row>
      <Col lg={1}>Imagen</Col>
      <Col>Nombre</Col>
      <Col>Precio</Col>
      <Col>Cantidad</Col>
      <Col>Total</Col>
      <Col></Col>
     </Row>

    </ListGroupItem>

    {cartItem.map(item => (
     <CartItem producto={item} />

    ))}
    <ListGroupItem>
     <Row>
      <Col lg={1}></Col>
      <Col></Col>
      <Col></Col>
      <Col>Total a pagar:</Col>
      <Col>${total}</Col>
      <Col></Col>
     </Row>

    </ListGroupItem>

   </ListGroup>
  </>
 )
}

export default Cart