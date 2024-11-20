// frontend/src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Optional: For custom styling
import axios from 'axios';
import Logo from '../../assets/images/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility


  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);


  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
       setIsAuth(true); 
     }
   }, [isAuth]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src={Logo} alt="Onthir Logo" className="navbar-logo-img" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
      

        <li><Link to="/posts" onClick={toggleMenu}>Blog</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        {isAuth? <li><Link to="/create-post" onClick={toggleMenu}>Create Post</Link></li> : <></>}
        {isAuth? <li><Link to="/logout" onClick={toggleMenu}>Logout</Link></li>:
          <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
        }
      </ul>
    </nav>
  );
};

export default Navbar;
