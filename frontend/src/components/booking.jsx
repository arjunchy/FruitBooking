import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import './index.css';

const Booking = () => {
  const [fruits, setFruits] = useState([]);
  const [selectedFruit, setSelectedFruit] = useState('');
  const [quantity, setQuantity] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/pasupati/fruits')
      .then((res) => res.json())
      .then((data) => setFruits(data))
      .catch((error) => console.error('Error fetching fruits:', error));
      console.log(fruits)
  }, []);

  const handleBooking = (e) => {
    e.preventDefault();
    const bookingData = {
      fruit: selectedFruit,
      quantity: quantity,
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
        setBookingSuccess(true);
        setSelectedFruit('');
        setQuantity('');
      })
      .catch((error) => console.error('Error booking fruit:', error));
  };

  return (
    <div className="fruit-booking-container">
      <Navbar />
      <h1 className="fruit-header">Pasupati Fruit Center</h1>
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
      </div>

      <h1 className="booking-header">Book Your Favorite Fruit</h1>
      <form onSubmit={handleBooking} className="booking-form">
        <label>
          Select Fruit:
          <select value={selectedFruit} onChange={(e) => setSelectedFruit(e.target.value)}>
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
          />
        </label>
        <br />
        <button type="submit" className="booking-btn">
          Book Now
        </button>
        {bookingSuccess && (
          <p className="booking-success">Booking successful! Thank you for choosing Fruitopia!</p>
        )}
      </form>
    </div>
  );
};

export default Booking;