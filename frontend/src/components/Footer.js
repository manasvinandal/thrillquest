import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ThrillQuest</h3>
          <p>Your gateway to extraordinary adventures. Experience the thrill of a lifetime with our carefully curated adventure packages.</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/booking">Book Now</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Adventure Categories</h3>
          <ul>
            <li><Link to="/adventures#air">Air Adventures</Link></li>
            <li><Link to="/adventures#water">Water Adventures</Link></li>
            <li><Link to="/adventures#ground">Ground Adventures</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li><i className="fas fa-phone"></i> +91 98765 43210</li>
            <li><i className="fas fa-envelope"></i> info@thrillquest.com</li>
            <li><i className="fas fa-map-marker-alt"></i> 123 Adventure Street, Mumbai, India</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2024 ThrillQuest. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/refund">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 