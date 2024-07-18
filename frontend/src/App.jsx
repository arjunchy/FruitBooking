import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Contact from './components/contact'
import About from './components/about'
import Booking from './components/booking'


function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/contact" element = {<Contact />} />
        <Route path = "/booking" element = {<Booking />} />
      </Routes> 
    </Router>
  )
}

export default App
