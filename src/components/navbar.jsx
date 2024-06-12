
import React from 'react';
import logo from './logo/craftathon.svg';


const Navbar = ({ menuItems }) => {
  return (
    <nav className="navbar" style={{zIndex:'3'}}>
      <ul className='nav-menu'>
         <a href="" className="nav-logo no-space"><img src={logo} alt="Logo" /></a>
       
        {menuItems.map((item, index) => (
          <li key={index} className="nav-item">
            
            <a href={item.href} className="nav-link">{item.text}</a>
          </li>
        ))}
      </ul>
     
    </nav>
  );
};

export default Navbar;