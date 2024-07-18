import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import './index.css';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <div className="contact-container">
      <Navbar />
      <div className="contact-content">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <h2>Our Address</h2>
          <p>Kathmandu 44600, Nepal</p>
          <h2>Email</h2>
          <p>dineshmht@gmail.com</p>
          <h2>Phone</h2>
          <p>(+977) 7880769332</p>
        </div>
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
        <div className="map-container">
          <h2>Find Us Here</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7065.5878185540105!2d85.30295791141869!3d27.692763905726242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18454e31d2db%3A0xe339ca49e34b9753!2sTeku%20Dovan%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sin!4v1720021234935!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
