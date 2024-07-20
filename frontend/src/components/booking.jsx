// src/components/booking.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from './navbar';
import './index.css';

const Booking = () => {
  const [fruits, setFruits] = useState([]);
  const [selectedFruit, setSelectedFruit] = useState('');
  const [quantity, setQuantity] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [step, setStep] = useState('select'); // Toggle between fruit selection and booking registration
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    fetch('http://127.0.0.1:8000/pasupati/fruits')
      .then((res) => res.json())
      .then((data) => setFruits(data))
      .catch((error) => console.error('Error fetching fruits:', error));
  }, []);

  const handleSelectFruit = () => {
    if (selectedFruit && quantity) {
      setStep('register');
    } else {
      alert('Please select a fruit and enter quantity.');
    }
  };

  const handleBooking = (e) => {
    e.preventDefault(); 
    const bookingData = {
      fruit: selectedFruit,
      quantity: quantity,
      name: name,
      phone: phoneNumber,
      date: date,
    };

    fetch('http://localhost:8000/pasupati/bookings/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Booking successful:', data);
        // Redirect to BookingRegistration page
        navigate('/booking-registration');
      })
      .catch((error) => console.error('Error booking fruit:', error));
  };

  return (
    <div className="fruit-booking-container">
      <Navbar />
      <h1 className="fruit-header">Pasupati Fruit Center</h1>

      {step === 'select' ? (
        <div className="fruit-panel">
          <h2>Available Fruits</h2>
          <div className="fruit-grid">
            {fruits.map((fruit) => (
              <div key={fruit.id} className="fruit-item">
                <img src={`http://localhost:8000/pasupati/fruits/${fruit.id}/image`} alt={fruit.name} />
                <h3>{fruit.name}</h3>
                <p>Available Quantity: {fruit.quantity}</p>
              </div>
            ))}
          </div>

          <h1 className="booking-header">Book Your Favorite Fruit</h1>
          <form onSubmit={(e) => e.preventDefault()} className="booking-form">
            <label>
              Select Fruit:
              <select value={selectedFruit} onChange={(e) => setSelectedFruit(e.target.value)} required>
                <option value="">Select a fruit</option>
                {fruits.map((fruit) => (
                  <option key={fruit.id} value={fruit.id}>
                    {fruit.name}
                  </option>
                ))}
              </select>
            </label>
            <br />
            <label>
              Quantity:
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </label>
            <br />
            <button type="button" onClick={handleSelectFruit} className="booking-btn">
              Proceed to Booking
            </button>
          </form>
        </div>
      ) : (
        <div className="booking-registration">
          <h1 className="booking-header">Booking Registration</h1>
          <form onSubmit={handleBooking} className="booking-form">
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Phone Number:
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Date:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </label>
            <br />
            <button type="submit" className="booking-btn">
              Confirm Booking
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Booking;
