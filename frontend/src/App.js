import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Booking from './components/Booking';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AdventureCategories from './components/AdventureCategories';
import ActivityDetail from './components/ActivityDetail';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Refund from './components/Refund';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/adventures" element={<AdventureCategories />} />
            <Route path="/adventure/:id" element={<ActivityDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund" element={<Refund />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
