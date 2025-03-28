import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About ThrillQuest</h1>
        <p>Your Gateway to Extraordinary Adventures</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>Founded in 2024, ThrillQuest emerged from a passion for adventure and a desire to make extraordinary experiences accessible to everyone. We believe that life's most memorable moments come from stepping out of your comfort zone and embracing the unknown.</p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>To provide safe, professionally guided adventure experiences that inspire, challenge, and transform. We're committed to making adventure sports accessible while maintaining the highest standards of safety and quality.</p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature">
              <i className="fas fa-shield-alt"></i>
              <h3>Safety First</h3>
              <p>All activities are conducted with certified instructors and top-quality safety equipment.</p>
            </div>
            <div className="feature">
              <i className="fas fa-map-marked-alt"></i>
              <h3>Expert Guides</h3>
              <p>Our instructors are experienced professionals who know the best spots and techniques.</p>
            </div>
            <div className="feature">
              <i className="fas fa-hand-holding-usd"></i>
              <h3>Best Value</h3>
              <p>Competitive prices for unforgettable experiences with no hidden costs.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Our Commitment</h2>
          <p>We're committed to:</p>
          <ul>
            <li>Providing safe and professionally guided experiences</li>
            <li>Using high-quality equipment and safety gear</li>
            <li>Supporting local communities and sustainable tourism</li>
            <li>Creating unforgettable memories for our adventurers</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About; 