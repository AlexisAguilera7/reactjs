import React from 'react';

const NavBar = () => {
 return (
  <nav>
   <div className="brand">Allbasketuy</div>
   <ul className="categories">
    <li><p><a class="link-opacity-75-hover" href="#">Camisetas</a></p></li>
    <li><p><a class="link-opacity-75-hover" href="#">Pelotas</a></p></li>
    <li><p><a class="link-opacity-75-hover" href="#">Zapatillas</a></p></li>
   </ul>

  </nav>
 );
};

export default NavBar;
