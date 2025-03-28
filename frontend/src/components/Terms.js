import React from 'react';
import '../styles/Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      <div className="terms-hero">
        <h1>Terms & Conditions</h1>
        <p>Last updated: March 2024</p>
      </div>

      <div className="terms-content">
        <section className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using ThrillQuest's services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.</p>
        </section>

        <section className="terms-section">
          <h2>2. Booking and Payment</h2>
          <ul>
            <li>All prices are in Indian Rupees (₹) and include applicable taxes</li>
            <li>Full payment is required to confirm your booking</li>
            <li>Prices are subject to change without notice</li>
            <li>We accept major credit cards and online payment methods</li>
            <li>Booking confirmation will be sent via email</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>3. Cancellation Policy</h2>
          <ul>
            <li>Cancellations made 7 days before the activity: 100% refund</li>
            <li>Cancellations made 3-7 days before: 50% refund</li>
            <li>Cancellations made less than 3 days before: No refund</li>
            <li>Weather-related cancellations: Full refund or rescheduling</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>4. Safety and Health</h2>
          <ul>
            <li>Participants must meet all health and fitness requirements</li>
            <li>Medical conditions must be disclosed at the time of booking</li>
            <li>Safety equipment must be worn as instructed</li>
            <li>Follow all instructions from guides and instructors</li>
            <li>Activities may be modified or cancelled for safety reasons</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>5. Liability</h2>
          <p>While we take all reasonable precautions to ensure your safety:</p>
          <ul>
            <li>Adventure activities carry inherent risks</li>
            <li>Participants must sign a liability waiver</li>
            <li>We recommend purchasing travel insurance</li>
            <li>We are not liable for personal injury or property damage</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>6. Intellectual Property</h2>
          <p>All content on this website, including:</p>
          <ul>
            <li>Text, images, and graphics</li>
            <li>Logos and trademarks</li>
            <li>Photographs and videos</li>
            <li>Website design and layout</li>
          </ul>
          <p>is the property of ThrillQuest and protected by copyright laws.</p>
        </section>

        <section className="terms-section">
          <h2>7. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.</p>
        </section>

        <section className="terms-section">
          <h2>8. Contact Information</h2>
          <p>For questions about these Terms & Conditions, please contact us at:</p>
          <p>Email: legal@thrillquest.com</p>
          <p>Phone: +91 98765 43210</p>
        </section>
      </div>
    </div>
  );
};

export default Terms; 