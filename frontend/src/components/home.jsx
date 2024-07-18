import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './Footer';
import './index.css'; // Ensure this import is correct
import AppleIcon from '../assets/images/AppleIcon.png'; 
import apple from '../assets/images/apple.jpg';
import banana from '../assets/images/banana.jpg';
import cherry from '../assets/images/cherry.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-hero">
        <h1>Welcome to Pasupati Fruit Center</h1>
        <p >We are a leading wholesaler of fresh fruits in Kathmandu, Nepal, dedicated to providing a diverse range of premium fruits to our customers. With a strong commitment to excellence, we ensure that our fruits meet the highest standards of quality, freshness, and safety.</p>
      </div>
      <div className="home-content">
        <section className="home-section">
          <h2>Our Mission</h2>
          <p>At Pasupati Fruit Center, we strive to build long-lasting relationships with our customers by providing top-quality fruits, timely deliveries, and impeccable packaging. We believe in promoting honesty, transparency, and integrity in all our business dealings.</p>
        </section>
        <section className="home-section">
          <h2>Importing from India and Nepal</h2>
          <p>We import a wide range of fruits from India and Nepal, ensuring that our customers get the best quality fruits at the most competitive prices. Our strong network of suppliers and farmers in both countries enables us to source the freshest and highest-quality fruits.</p>
        </section>
        <section className="home-section">
          <h2>Best Rates in Kathmandu</h2>
          <p>As a wholesaler in Kathmandu, we offer the best rates in the market for our fruits. Our competitive pricing strategy is designed to help our customers grow their business, while we grow ours.</p>
        </section>
        <section className="home-section">
          <h2>Discover Our Fresh Produce</h2>
          <p>Explore our world of vibrant fruits, and discover the endless possibilities that await you. From farm to table, the journey of flavor begins here.</p>
        </section>
        <section className="home-section">
          <h2>Why Choose Us</h2>
          <ul>
            <li>Top Quality: Our commitment to excellence guarantees your satisfaction.</li>
            <li>Punctuality: Timely deliveries, keeping our promises intact.</li>
            <li>Food Safety: Impeccable packaging for your peace of mind.</li>
            <li>Integrity: Promoting honesty, transparency, and integrity.</li>
            <li>Competitive prices: We offer our fruits at competitive prices, making them affordable for our customers.</li>         
          </ul>
        </section>
        <section className="home-section">
          <h2>Get in Touch</h2>
          <p>Let's connect and explore the world of fresh produce together! Whether you're a retailer, restaurateur, or simply a fruit lover, we'd love to hear from you.</p>
          <Link to="/Booking">
            <img
              src={AppleIcon}
              alt="Apple Icon"
              className="fruit-icon"
            />
          </Link>
        </section>
        <p>Explore our fresh fruits and place your order today!</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
