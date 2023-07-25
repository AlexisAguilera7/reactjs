import React, { useEffect, useState } from 'react';
import ItemCount from '../componentes/ItemCount';
import { useEffect } from 'react';
import IemList from '../componentes /ItemList';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const productList = [
    { id: `01`, name: `Pelota`, stock: 10, precio: 500, description: `Pelota Spanding`, img: `../img/pelota.jpeg` },
    { id: `02`, name: `Camiseta`, stock: 7, precio: 900, description: `Camiseta de los Angeles Lakers`, img: `../img/camiseta.jpeg` },
    { id: `03`, name: `Tableros`, stock: 24, precio: 1500, description: `Tablero Spanding profesional`, img: `../img/tableros.jpeg` },
    { id: `04`, name: `Zapatillas`, stock: 14, precio: 3000, description: `Nike Lebron18 low`, img: `../img/zapatillas.jpeg` },
  ]



  const getProducts = () => {
    new Promise((resolve, reject) => {
      let error = false
      setTimeout(() => {
        if (error) {
          reject(`ups, algo salio mal`)
        } else {
          resolve(productList)
        }
      }, 2000)
    })
  }
  useEffect(() => {
    getProducts()
      .then((resp) => setProductos(resp))
      .catch((error) => console.log(error))
  }, [])

  const onAdd = (cantidad) => {
    console.log(`compraste ${cantidad}`)

  }
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <ItemList productos={productos} />
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
