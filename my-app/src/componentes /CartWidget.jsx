import React from 'react';
import { useCart } from '../context/CartContext';
import { NavLink } from 'react-bootstrap';

const CartWidget = () => {
 const { cartItem, removeItem } = useCart()
 return (

  <div className="cart-widget">
   <i className="fa fa-shopping-cart"></i>
   <span className="notification">{cartItem.length}</span>
  </div>



 );
};

export default CartWidget;

