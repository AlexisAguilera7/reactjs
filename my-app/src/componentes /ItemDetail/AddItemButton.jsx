import React from 'react'
import { Button } from 'react-bootstrap'

export const AddItemButton = ({ cantidad, onAdd }) => {
 return (

  <Button disabled={cantidad === 0} onClick={() => onAdd(cantidad)}>
   Agregar al carrito
  </Button>
 )
}



