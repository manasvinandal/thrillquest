import React, { useState } from 'react';
import '../styles/Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    adventure: '',
    date: '',
    participants: 1,
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const adventures = [
    { id: 1, name: 'Mountain Trekking', price: 299, duration: '3 days' },
    { id: 2, name: 'Scuba Diving', price: 199, duration: '1 day' },
    { id: 3, name: 'Desert Safari', price: 149, duration: '1 day' },
    { id: 4, name: 'White Water Rafting', price: 249, duration: '2 days' },
    { id: 5, name: 'Paragliding', price: 179, duration: '1 day' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', formData);
  };

  return (
    <div className="booking-page">
      <div className="booking-container">
        <div className="booking-header">
          <h1>Book Your Adventure</h1>
          <p>Fill in the details below to secure your spot</p>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="adventure">Select Adventure</label>
            <select
              id="adventure"
              name="adventure"
              value={formData.adventure}
              onChange={handleChange}
              required
            >
              <option value="">Choose an adventure</option>
              {adventures.map(adventure => (
                <option key={adventure.id} value={adventure.id}>
                  {adventure.name} - ${adventure.price} ({adventure.duration})
                </option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Preferred Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="participants">Number of Participants</label>
              <input
                type="number"
                id="participants"
                name="participants"
                min="1"
                max="10"
                value={formData.participants}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
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
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="specialRequests">Special Requests</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking; 