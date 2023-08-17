import React from 'react';
import NavBar from './componentes /NavBar';
import ItemListContainer from './componentes /ItemListContainer';
import './index.css';
import ItemDetailContainer from './componentes /ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './componentes /Cart';


const App = () => {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="¡Hola! Bienvenido a nuestra tienda." />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Categoria " />} />
        <Route path='/item/:detalleId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

