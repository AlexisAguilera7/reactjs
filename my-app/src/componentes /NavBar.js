import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
 return (
  <nav>
   <div className="brand">Título de la tienda</div>
   <ul className="categories">
    <li>Categoría 1</li>
    <li>Categoría 2</li>
    <li>Categoría 3</li>
   </ul>
   <CartWidget />
  </nav>
 );
};

export default NavBar;
