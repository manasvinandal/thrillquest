import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { adventureService } from '../services/api';
import '../styles/AdventureCategories.css';

const AdventureCategories = () => {
  const [adventures, setAdventures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdventures = async () => {
      try {
        const response = await adventureService.getAllAdventures();
        setAdventures(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch adventures');
        setLoading(false);
      }
    };

    fetchAdventures();
  }, []);

  if (loading) return <div className="loading">Loading adventures...</div>;
  if (error) return <div className="error">{error}</div>;

  // Group adventures by category
  const adventuresByCategory = adventures.reduce((acc, adventure) => {
    if (!acc[adventure.category]) {
      acc[adventure.category] = [];
    }
    acc[adventure.category].push(adventure);
    return acc;
  }, {});

  const categoryTitles = {
    air: 'Air Adventures',
    water: 'Water Adventures',
    ground: 'Ground Adventures'
  };

  return (
    <div className="adventure-categories">
      {Object.entries(adventuresByCategory).map(([category, activities]) => (
        <section key={category} id={category} className="category-section">
          <h2>{categoryTitles[category]}</h2>
          <div className="activities-grid">
            {activities.map((activity) => (
              <div key={activity._id} className="activity-card">
                <div className="activity-image">
                  <img src={activity.image} alt={activity.name} />
                </div>
                <div className="activity-content">
                  <h3>{activity.name}</h3>
                  <div className="activity-details">
                    <span className="price">₹{activity.price}</span>
                    <span className="duration">{activity.duration}</span>
                  </div>
                  <p className="activity-description">{activity.description}</p>
                  <Link to={`/adventure/${activity._id}`} className="view-details-button">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default AdventureCategories; 