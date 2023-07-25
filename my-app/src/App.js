
import NavBar from '../src/componentes /NavBar';
import ItemListContainer from '../src/componentes /ItemListContainer';

import './index.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Hola! Bienvenido a nuestra tienda." />

    </div>
  );
};

export default App;

