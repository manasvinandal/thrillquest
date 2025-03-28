import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { adventureService } from '../services/api';
import '../styles/ActivityDetail.css';

const ActivityDetail = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const response = await adventureService.getAdventureById(id);
        setActivity(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch activity details');
        setLoading(false);
      }
    };

    fetchActivity();
  }, [id]);

  if (loading) return <div className="loading">Loading activity details...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!activity) {
    return (
      <div className="activity-detail">
        <div className="error-message">
          <h2>Activity not found</h2>
          <Link to="/adventures" className="back-button">Back to Adventures</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="activity-detail">
      <div className="activity-hero">
        <div className="activity-banner" style={{ backgroundImage: `url(${activity.image})` }}>
          <div className="activity-hero-content">
            <h1>{activity.name}</h1>
            <p className="activity-price">Starting from ₹{activity.price}</p>
          </div>
        </div>
      </div>

      <div className="activity-info-container">
        <div className="activity-main-content">
          <div className="info-card">
            <h2>Overview</h2>
            <p>{activity.description}</p>
          </div>

          <div className="info-card">
            <h2>Duration & Schedule</h2>
            <p>{activity.duration}</p>
            <ul>
              <li>Check-in: 30 minutes before activity</li>
              <li>Safety briefing: 15 minutes</li>
              <li>Equipment preparation: 15 minutes</li>
              <li>Activity duration: {activity.duration}</li>
            </ul>
          </div>

          <div className="info-card">
            <h2>Requirements</h2>
            <ul>
              {activity.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <div className="info-card">
            <h2>What You'll Experience</h2>
            <ul>
              {activity.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="info-card">
            <h2>Available Locations</h2>
            <div className="locations-list">
              {activity.locations.map((location, index) => (
                <div key={index} className="location-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{location}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="booking-sidebar">
          <div className="booking-card">
            <h3>Book This Adventure</h3>
            <div className="booking-details">
              <p><i className="fas fa-clock"></i> Duration: {activity.duration}</p>
              <p><i className="fas fa-users"></i> Max Participants: {activity.maxParticipants}</p>
              <p><i className="fas fa-rupee-sign"></i> Price: ₹{activity.price}</p>
            </div>
            <Link to="/booking" className="book-now-button">
              Book Now
            </Link>
            <div className="safety-notice">
              <i className="fas fa-shield-alt"></i>
              <p>All activities are conducted under expert supervision with certified instructors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail; 