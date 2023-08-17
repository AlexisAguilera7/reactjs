import React from 'react';
import { useCart } from '../context/CartContext';
//import { NavLink } from 'react-bootstrap';

const CartWidget = () => {
 const { cartItem, } = useCart()
 const total = cartItem.reduce((acc, prod) => acc + (prod.cantidad), 0)
 return (

  <div className="cart-widget">
   <i className="fa fa-shopping-cart"></i>
   <span className="notification">{total}</span>
  </div>



 );
};

export default CartWidget;

