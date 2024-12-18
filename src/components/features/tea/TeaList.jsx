import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeaProductCard from './TeaProductCard';
import LoadingSpinner from '../../ui/LoadingSpinner';
import SkeletonLoader from '../../ui/SkeletonLoader';
import './styles/TeaList.css';
import '../../../styles/animations.css';

const TeaList = () => {
  const [teas, setTeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const fetchTeas = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5001/api/teas/search');
        setTeas(response.data.products);
        setLoading(false);
        setIsInitialLoad(false);
      } catch (error) {
        console.error('Error fetching teas:', error);
        setError('Failed to load tea products. Please try again later.');
        setLoading(false);
        setIsInitialLoad(false);
      }
    };
    fetchTeas();
  }, []);

  const filteredTeas = filter === 'all' 
    ? teas 
    : teas.filter(tea => tea.type?.toLowerCase() === filter);

  // Show skeleton loader on initial load
  if (isInitialLoad) {
    return (
      <div className="tea-list-container">
        <div className="container">
          <div className="filter-section animate-fadeIn">
            {['all', 'green', 'black', 'herbal'].map(type => (
              <button
                key={type}
                className="filter-button"
                disabled
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          <div className="tea-grid">
            {Array(6).fill(0).map((_, index) => (
              <SkeletonLoader key={index} type="product-card" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="error-container animate-fadeIn">
        <p className="error-message">{error}</p>
        <button 
          className="button button-primary button-press"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="tea-list-container">
      <div className="container">
        {/* Filter Section */}
        <div className="filter-section animate-slideInDown">
          {['all', 'green', 'black', 'herbal'].map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`filter-button button-press ${filter === type ? 'active' : ''}`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Tea Grid */}
        <div className="tea-grid stagger-children">
          {loading ? (
            <LoadingSpinner size="large" />
          ) : filteredTeas.length > 0 ? (
            filteredTeas.map((tea, index) => (
              <TeaProductCard 
                key={tea.id}
                product={tea}
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))
          ) : (
            <div className="empty-message animate-fadeIn">
              No teas found in this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeaList;
