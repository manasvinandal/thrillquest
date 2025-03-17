import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const featuredAdventures = [
    {
      id: 1,
      title: 'Mountain Trekking',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      price: '$299',
      duration: '3 days',
      location: 'Himalayas'
    },
    {
      id: 2,
      title: 'Scuba Diving',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5',
      price: '$199',
      duration: '1 day',
      location: 'Great Barrier Reef'
    },
    {
      id: 3,
      title: 'Desert Safari',
      image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35',
      price: '$149',
      duration: '1 day',
      location: 'Dubai'
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Next Adventure</h1>
          <p>Experience the thrill of a lifetime with our curated adventure packages</p>
          <Link to="/booking" className="cta-button">
            Start Your Journey
          </Link>
        </div>
      </section>

      <section className="featured-adventures">
        <h2>Featured Adventures</h2>
        <div className="adventures-grid">
          {featuredAdventures.map((adventure) => (
            <div key={adventure.id} className="adventure-card">
              <div className="adventure-image">
                <img src={adventure.image} alt={adventure.title} />
              </div>
              <div className="adventure-content">
                <h3>{adventure.title}</h3>
                <p className="location">{adventure.location}</p>
                <div className="adventure-details">
                  <span className="duration">{adventure.duration}</span>
                  <span className="price">{adventure.price}</span>
                </div>
                <Link to="/booking" className="book-button">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose ThrillQuest?</h2>
        <div className="features-grid">
          <div className="feature">
            <i className="fas fa-shield-alt"></i>
            <h3>Safe Adventures</h3>
            <p>Your safety is our top priority</p>
          </div>
          <div className="feature">
            <i className="fas fa-map-marked-alt"></i>
            <h3>Expert Guides</h3>
            <p>Professional guides for every adventure</p>
          </div>
          <div className="feature">
            <i className="fas fa-hand-holding-usd"></i>
            <h3>Best Value</h3>
            <p>Competitive prices for unforgettable experiences</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 