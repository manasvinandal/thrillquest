import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with our adventure experts</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Address</h3>
            <p>123 Adventure Street</p>
            <p>Mumbai, Maharashtra 400001</p>
            <p>India</p>
          </div>

          <div className="info-card">
            <i className="fas fa-phone"></i>
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
            <p>+91 98765 43211</p>
            <p>Mon-Sat: 9:00 AM - 8:00 PM</p>
          </div>

          <div className="info-card">
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <p>info@thrillquest.com</p>
            <p>support@thrillquest.com</p>
            <p>bookings@thrillquest.com</p>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 