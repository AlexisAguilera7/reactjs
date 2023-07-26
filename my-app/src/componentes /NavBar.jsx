import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
 return (
  <nav>
   <div className="titulo">Allbasketuy<i className="fa fa-basketball"></i></div>
   <ul className="categories">
    <li><p><a className="link-opacity-75-hover" href="/">Camisetas</a></p></li>
    <li><p><a className="link-opacity-75-hover" href="/">Pelotas</a></p></li>
    <li><p><a className="link-opacity-75-hover" href="/">Zapatillas</a></p></li>
   </ul>
   <CartWidget />
  </nav>
 );
};

export default NavBar;
