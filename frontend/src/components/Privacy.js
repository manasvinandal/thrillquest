import React from 'react';
import '../styles/Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-hero">
        <h1>Privacy Policy</h1>
        <p>Last updated: March 2024</p>
      </div>

      <div className="privacy-content">
        <section className="privacy-section">
          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Name and contact information</li>
            <li>Payment information</li>
            <li>Travel preferences and requirements</li>
            <li>Medical information relevant to adventure activities</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process your bookings and payments</li>
            <li>Communicate with you about your adventures</li>
            <li>Ensure your safety during activities</li>
            <li>Improve our services</li>
            <li>Send you promotional materials (with your consent)</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>3. Information Sharing</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul>
            <li>Service providers who assist in our operations</li>
            <li>Adventure guides and instructors</li>
            <li>Emergency services when necessary</li>
            <li>Legal authorities when required by law</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information, including:</p>
          <ul>
            <li>Encryption of sensitive data</li>
            <li>Regular security assessments</li>
            <li>Secure payment processing</li>
            <li>Access controls and authentication</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Object to data processing</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>6. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>Email: privacy@thrillquest.com</p>
          <p>Phone: +91 98765 43210</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy; 