import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProducts } from '../mock/data.js';


const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])



  useEffect(() => {
    getProducts()
      .then((resp) => setProductos(resp))
      .catch((error) => console.log(error))
  }, [])


  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <ItemList productos={productos} />

    </div>
  );
};

export default ItemListContainer;
