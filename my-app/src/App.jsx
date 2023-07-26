import React from 'react';
import NavBar from './componentes /NavBar';
import ItemListContainer from './componentes /ItemListContainer';
import './index.css';
import ItemDetailContainer from './componentes /ItemDetailContainer';
import { BrouserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrouserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="¡Hola! Bienvenido a nuestra tienda." />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Categoria " />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>

    </BrouserRouter>
  );
};

export default App;

