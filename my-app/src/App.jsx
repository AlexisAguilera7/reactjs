import React from 'react';
import NavBar from './componentes /NavBar';
import ItemListContainer from './componentes /ItemListContainer';
import './index.css';
import ItemDetailContainer from './componentes /ItemDetailContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Hola! Bienvenido a nuestra tienda." />
      <ItemDetailContainer />
    </div>
  );
};

export default App;

