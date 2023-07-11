import React from 'react';
import NavBar from '../src/componentes /NavBar';
import ItemList from '../src/componentes /ItemList';

import './index.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemList greeting="¡Hola! Bienvenido a nuestra tienda." />

    </div>
  );
};

export default App;

