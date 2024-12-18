import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/TeaList.css';

const TeaList = () => {
  const [teas, setTeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchTeas = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/teas/search');
        setTeas(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching teas:', error);
        setError('Failed to load tea products. Please try again later.');
        setLoading(false);
      }
    };
    fetchTeas();
  }, []);

  const filteredTeas = filter === 'all' 
    ? teas 
    : teas.filter(tea => tea.type?.toLowerCase() === filter);

  if (loading) return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
    </div>
  );

  if (error) return (
    <div className="error-message">{error}</div>
  );

  return (
    <div className="tea-list-container">
      <div className="tea-list-content">
        {/* Filter Section */}
        <div className="filter-section">
          {['all', 'green', 'black', 'herbal'].map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`filter-button ${filter === type ? 'active' : ''}`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Tea Grid */}
        <div className="tea-grid">
          {filteredTeas.map(tea => (
            <div key={tea.id} className="tea-card">
              <div className="tea-image-container">
                <img 
                  src={tea.image} 
                  alt={tea.title} 
                  className="tea-image"
                  onError={(e) => {
                    e.target.src = '/images/tea-placeholder.jpg';
                  }}
                />
                <div className="image-overlay"></div>
                <div className="tea-price">${tea.price}</div>
              </div>
              
              <div className="tea-info">
                <h2 className="tea-title">{tea.title}</h2>
                <p className="tea-description">{tea.description || 'Delicious premium tea'}</p>
                
                <div className="tea-footer">
                  <span className="tea-type">{tea.type || 'Classic Blend'}</span>
                  <button className="add-button">
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTeas.length === 0 && (
          <div className="empty-message">
            No teas found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default TeaList;
