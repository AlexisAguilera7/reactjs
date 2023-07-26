import React from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
 return (
  <nav>
   <div className="titulo">Allbasketuy<i className="fa fa-basketball"></i></div>
   <ul className="categories">
    <li><p><a className="link-opacity-75-hover" as={NavLink} to='/category/Camisetas'>Camisetas</a></p></li>
    <li><p><a className="link-opacity-75-hover" as={NavLink} to='/category/Pelotas'>Pelotas</a></p></li>
    <li><p><a className="link-opacity-75-hover" as={NavLink} to='/category/Zapatillas'>Zapatillas</a></p></li>
    <li><p><a className="link-opacity-75-hover" as={NavLink} to='/category/Tableros'>Tableros</a></p></li>
   </ul>
   <CartWidget />
  </nav>
 );
};

export default NavBar;
