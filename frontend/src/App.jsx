// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';
import Booking from './components/booking';
import BookingRegistration from './components/BookingRegistration'; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking-registration" element={<BookingRegistration />} /> {/* Add route for BookingRegistration */}
      </Routes>
    </Router>
  );
}

export default App;
