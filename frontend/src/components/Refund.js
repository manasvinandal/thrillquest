import React from 'react';
import '../styles/Refund.css';

const Refund = () => {
  return (
    <div className="refund-page">
      <div className="refund-hero">
        <h1>Refund Policy</h1>
        <p>Last updated: March 2024</p>
      </div>

      <div className="refund-content">
        <section className="refund-section">
          <h2>General Refund Policy</h2>
          <p>At ThrillQuest, we want you to be completely satisfied with your adventure experience. Our refund policy is designed to be fair and transparent.</p>
        </section>

        <section className="refund-section">
          <h2>Booking Cancellations</h2>
          <div className="refund-timeline">
            <div className="timeline-item">
              <h3>7+ Days Before Activity</h3>
              <p>100% refund of the booking amount</p>
            </div>
            <div className="timeline-item">
              <h3>3-7 Days Before Activity</h3>
              <p>50% refund of the booking amount</p>
            </div>
            <div className="timeline-item">
              <h3>Less Than 3 Days Before</h3>
              <p>No refund available</p>
            </div>
          </div>
        </section>

        <section className="refund-section">
          <h2>Weather-Related Cancellations</h2>
          <ul>
            <li>Full refund if activity is cancelled due to weather conditions</li>
            <li>Option to reschedule at no additional cost</li>
            <li>Weather assessment made 24 hours before activity</li>
            <li>Final decision made by our safety team</li>
          </ul>
        </section>

        <section className="refund-section">
          <h2>Medical Emergencies</h2>
          <ul>
            <li>Full refund with valid medical documentation</li>
            <li>Documentation must be submitted within 48 hours</li>
            <li>Subject to verification by our team</li>
            <li>May require additional medical clearance for future bookings</li>
          </ul>
        </section>

        <section className="refund-section">
          <h2>Refund Process</h2>
          <ol>
            <li>Submit refund request through our website or contact us</li>
            <li>Provide booking reference number and reason for refund</li>
            <li>Submit any required documentation</li>
            <li>Refund processed within 5-7 business days</li>
            <li>Original payment method will be credited</li>
          </ol>
        </section>

        <section className="refund-section">
          <h2>Non-Refundable Items</h2>
          <ul>
            <li>Travel insurance premiums</li>
            <li>Processing fees</li>
            <li>Customized equipment rentals</li>
            <li>Special arrangements or add-ons</li>
          </ul>
        </section>

        <section className="refund-section">
          <h2>Contact Us</h2>
          <p>For refund requests or questions about our refund policy:</p>
          <p>Email: refunds@thrillquest.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Hours: Monday - Saturday, 9:00 AM - 8:00 PM IST</p>
        </section>
      </div>
    </div>
  );
};

export default Refund; 