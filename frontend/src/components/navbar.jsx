import React from 'react';
import { Link } from 'react-router-dom';
 // External CSS for styling
 import './index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link className="navbar-link" to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/about">About</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/contact">Contact-Us</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/booking">Booking</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
