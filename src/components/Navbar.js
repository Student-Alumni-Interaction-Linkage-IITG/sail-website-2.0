import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../images/sail white logo 1.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="SAIL Logo" />
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#">About Us</a></li>
        <li className="dropdown">
          <a href="#">Initiatives</a>
          {/* Add dropdown menu items if necessary */}
        </li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Calendar</a></li>
        <li><a href="#" className="donate">Donate</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
