// src/components/bookingRegistration.js
import React from 'react';
import Navbar from './navbar';
import './index.css';

const BookingRegistration = () => {
  return (
    <div className="fruit-booking-container">
      <Navbar />
      <h1 className="fruit-header">Pasupati Fruit Center</h1>
      <h1 className="booking-header">Booking Confirmation</h1>
      <p className="confirmation-message">Your booking has been successfully submitted. Thank you for choosing Pashupati Fruit Center!</p>
    </div>
  );
};

export default BookingRegistration;
