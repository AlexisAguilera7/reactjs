import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { Button, Col, Form, ListGroup, ListGroupItem, Modal, NavLink, Row, } from 'react-bootstrap'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const Cart = () => {
 const [show, setShow] = useState(false);
 const handleClose = () => {
  setCartItem([])
  setShow(false);
 }
 const handleShow = () => setShow(true);
 const [orderId, setorderId] = useState("")
 const { cartItem, setCartItem } = useCart()
 const total = cartItem.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)
 const [userdata, setuserdata] = useState({
  name: "",
  lastname: "",
  phone: "",
  email: "",
  repeatemail: "",
 })
 function onChangeFormulario(event) {
  const info = { ...userdata }
  info[event.target.name] = event.target.value
  setuserdata(info)
 }
 function finalizarCompra(event) {
  event.preventDefault()
  if (userdata.email === userdata.repeatemail) {
   const order = {
    buyer: userdata,
    product: cartItem,
    total: total
   }
   const db = getFirestore()
   const orderscollection = collection(db, 'orders')
   addDoc(orderscollection, order).then(({ id }) => {
    setorderId(id)
    handleShow()

   })
  }
 }

 if (cartItem.length === 0) {
  return (
   <>
    <h2>Carrito vacio</h2>
    <Link to='/'><h3>Productos</h3></Link>
   </>
  )
 }
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
     <CartItem key={item.id} producto={item} />

    ))}
    <ListGroupItem>
     <Row>
      <Col lg={1}></Col>
      <Col></Col>
      <Col></Col>
      <Col>Total a pagar:</Col>
      <Col>${total}</Col>

     </Row>

    </ListGroupItem>

   </ListGroup>
   <h3>Informacion del cliente</h3>
   <Form onSubmit={finalizarCompra}>
    <Form.Group className="mb-3">
     <Form.Label>Nombre</Form.Label>
     <Form.Control required name="name" onChange={onChangeFormulario} value={userdata.name} type="text" placeholder="Ingresa tu nombre" />

    </Form.Group>
    <Form.Group className="mb-3">
     <Form.Label>Apellido</Form.Label>
     <Form.Control required name="lastname" onChange={onChangeFormulario} value={userdata.lastname} type="text" placeholder="Ingresa tu apellido" />

    </Form.Group>
    <Form.Group className="mb-3">
     <Form.Label>Telefono</Form.Label>
     <Form.Control required name="phone" onChange={onChangeFormulario} value={userdata.phone} type="phone" placeholder="Ingresa tu numero telefonico" />

    </Form.Group>
    <Form.Group className="mb-3">
     <Form.Label>Email</Form.Label>
     <Form.Control required name="email" onChange={onChangeFormulario} value={userdata.email} type="email" placeholder="Enter email" />

    </Form.Group>
    <Form.Group className="mb-3">
     <Form.Label>repite tu Email</Form.Label>
     <Form.Control required name="repeatemail" onChange={onChangeFormulario} value={userdata.repeatemail} type="email" placeholder="Enter email" />
     {(userdata.email !== userdata.repeatemail) && (
      <Form.Text className="text-muted">
       Los email deben coincidir.
      </Form.Text>
     )}
    </Form.Group>
    <Col><Button type="submit" >Finalizar compra</Button></Col>
   </Form>

   <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
     <Modal.Title>Compra confirmada</Modal.Title>
    </Modal.Header>
    <Modal.Body>Gracias por tu compra! el id de tu compra es :{orderId} </Modal.Body>
    <Modal.Footer>
     <Button variant="secondary" onClick={handleClose}>
      Cerrar
     </Button>

    </Modal.Footer>
   </Modal>
  </>
 )
}

export default Cart