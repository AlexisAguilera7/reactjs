import React from 'react';
import NavBar from '../src/componentes /NavBar';
import ItemList from '../src/componentes /ItemList';
import CartWidget from '../src/componentes /CartWidget';
import './index.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <CartWidget />
      <ItemList greeting="¡Hola! Bienvenido a nuestra tienda." />

    </div>
  );
};

export default App;

