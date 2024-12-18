import React from 'react';
import './styles/LoadingSpinner.css';

const LoadingSpinner = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'loading-spinner-sm',
    medium: 'loading-spinner-md',
    large: 'loading-spinner-lg'
  };

  return (
    <div className="loading-container">
      <div className={`loading-spinner ${sizeClasses[size]} animate-spin`}>
        <div className="loading-dots">
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
