import React from 'react';
import './index.css';
import Navbar from './navbar'; 
import Footer from './Footer'; 
 // External CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      <div className="about-content">
        <h1>About Us</h1>
        <p>
        Welcome to  fruit Center, Your Trusted Wholesale Fruit Shop in Kathmandu
        </p>
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver high-quality products that improve our customers' lives.
          </p>
        </section>
        <section className="about-section">
          <h2>Our Team</h2>
          <p>
            We have a team of passionate professionals committed to excellence.
          </p>
        </section>
        <section className="about-section">
          <h2>Contact Us</h2>
          <p>
            Feel free to reach out to us at fruitbooking@gmail.com.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
