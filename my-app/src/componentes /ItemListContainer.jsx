import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProducts } from '../mock/data.js';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    getProducts()
      .then((resp) => {
        if (categoryId) {
          setProductos(resp.filter((item) => item.category === categoryId))
        } else {
          setProductos(resp)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [categoryId])


  return (
    <div>{
      loading ? <p>Cargando...</p> :
        <div className="item-list-container">
          <h2>{greeting}<span>{categoryId && categoryId}</span></h2>
          <ItemList productos={productos} />
        </div>
    }
    </div>
  );
};

export default ItemListContainer;
