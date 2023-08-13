import React from "react";
import { Button } from 'react-bootstrap';

const ItemQuantitySelector = ({ stock, setCantidad, cantidad }) => {

 const suma = () => {
  if (cantidad < stock) {
   setCantidad(cantidad + 1);
  }
 };

 const resta = () => {
  if (cantidad > 0) {
   setCantidad(cantidad - 1);
  }
 };

 return (
  <div className="d-flex-column aling-items-center">
   <div >
    <Button onClick={resta}>-</Button>
    <span>{cantidad}</span>
    <Button onClick={suma}>+</Button>
   </div>

  </div>
 );
};

export default ItemQuantitySelector;
