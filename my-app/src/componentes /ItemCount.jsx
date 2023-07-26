import React, { useState } from "react";
import { Button } from 'react-bootstrap';

const ItemCount = ({ stock, onAdd, initial }) => {
 const [count, setCount] = useState(initial);

 const suma = () => {
  if (count < stock) {
   setCount(count + 1);
  }
 };

 const resta = () => {
  if (count > 0) {
   setCount(count - 1);
  }
 };

 return (
  <div>
   <div>
    <Button onClick={resta}>-</Button>
    <span>{count}</span>
    <Button onClick={suma}>+</Button>
   </div>
   <Button disabled={count === 0} onClick={() => onAdd(count)}>
    Agregar al carrito
   </Button>
  </div>
 );
};

export default ItemCount;
