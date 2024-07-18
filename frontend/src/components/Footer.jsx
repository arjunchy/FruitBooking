// Footer.jsx
import React from 'react';
// External CSS for styling
import './index.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
      <p>
        Follow us on
        <a href="https://twitter.com/yourcompany"> Twitter</a>,
        <a href="https://facebook.com/yourcompany"> Facebook</a>,
      </p>
    </footer>
  );
};

export default Footer;
