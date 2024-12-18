import React from 'react';
import './styles/SkeletonLoader.css';

const SkeletonLoader = ({ type = 'text', count = 1 }) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'product-card':
        return (
          <div className="skeleton-product-card animate-pulse">
            <div className="skeleton-image"></div>
            <div className="skeleton-content">
              <div className="skeleton-title"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-button"></div>
            </div>
          </div>
        );

      case 'text':
        return <div className="skeleton-text animate-pulse"></div>;

      case 'circle':
        return <div className="skeleton-circle animate-pulse"></div>;

      default:
        return null;
    }
  };

  return (
    <div className="skeleton-wrapper">
      {Array(count).fill(0).map((_, index) => (
        <div key={index}>
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
