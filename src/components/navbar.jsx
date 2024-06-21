import React, { useState } from 'react';
import logo from './logo/craftathon.svg';

const Navbar = ({ menuItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
     

      
      <div className={`nav-toggle ${menuOpen ? 'open' : ''}`} onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
      <a href="/" className="nav-logo no-space">
          <img src={logo} alt="Logo" />
        </a>
        {menuItems.map((item, index) => (
          <li key={index} className="nav-item">
            <a href={item.href} className="nav-link" onClick={() => setMenuOpen(false)}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
