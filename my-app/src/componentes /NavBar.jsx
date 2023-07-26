import React from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
 return (
  <nav>
   <div className="titulo">Allbasketuy<i className="fa fa-basketball"></i></div>
   <ul className="categories">
    <li><p><NavLink className="link-opacity-75-hover" to='/'>Home</NavLink></p></li>
    <li><p><NavLink className="link-opacity-75-hover" to='/category/Camisetas'>Camisetas</NavLink></p></li>
    <li><p><NavLink className="link-opacity-75-hover" to='/category/Pelotas'>Pelotas</NavLink></p></li>
    <li><p><NavLink className="link-opacity-75-hover" to='/category/Zapatillas'>Zapatillas</NavLink></p></li>
    <li><p><NavLink className="link-opacity-75-hover" to='/category/Tableros'>Tableros</NavLink></p></li>
   </ul>
   <CartWidget />
  </nav>
 );
};

export default NavBar;
