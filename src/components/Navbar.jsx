import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import DriveEase from '../assets/DriveEase.png';
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <nav className='nav-container'>
      <div className='logo-container'>
        <NavLink to='/'>
          <img src={DriveEase} alt='Logo' className='logo-img' />
        </NavLink>
      </div>
      <div className={`nav-links-container ${isOpen ? 'open' : ''}`}>
        <ul className='nav-links-list'>
          <li className='nav-link'>
            <NavLink to='/' className={({isActive}) => isActive ? "active-link" : ""}>Home</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink to='/vehicle' className={({isActive}) => isActive ? "active-link" : ""}>Vehicles</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink to='/contact' className={({isActive}) => isActive ? "active-link" : ""}>Contact Us</NavLink>
          </li>
          <li className='nav-link mobile-only'>
            <button className='profile-btn' onClick={handleLogin}>Login</button>
          </li>
        </ul>
      </div>
      <div className='profile-container desktop-only'>
        <button className='profile-btn' onClick={handleLogin}>Login</button>
      </div>
      <button className='burger-menu' onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;