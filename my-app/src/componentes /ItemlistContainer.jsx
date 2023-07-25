import React from 'react';
import ItemCount from '../componentes/ItemCount';

const ItemListContainer = ({ greeting }) => {

  const onAdd = (cantidad) => {
    console.log(`compraste ${cantidad}`)

  }
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
