/**
 * TeaList Components
 * Separates container and presentation logic
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useTeas } from '../../hooks/useTeas';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';
import CategoryFilter from '../common/CategoryFilter';
import TeaGrid from './TeaGrid';

const LastUpdated = ({ timestamp }) => (
  <span className="text-sm text-gray-500">
    Last updated: {new Date(timestamp).toLocaleTimeString()}
  </span>
);

LastUpdated.propTypes = {
  timestamp: PropTypes.string.isRequired
};

const TeaListView = ({ 
  teas, 
  selectedCategory, 
  onCategoryChange,
  lastUpdated 
}) => (
  <div className="bg-gray-50 min-h-screen py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Our Tea Collection
        </h2>
        {lastUpdated && <LastUpdated timestamp={lastUpdated} />}
      </div>
      
      <CategoryFilter 
        selected={selectedCategory}
        onChange={onCategoryChange}
      />

      <TeaGrid items={teas} />
    </div>
  </div>
);

TeaListView.propTypes = {
  teas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired,
  selectedCategory: PropTypes.string,
  onCategoryChange: PropTypes.func.isRequired,
  lastUpdated: PropTypes.string
};

const TeaList = () => {
  const { 
    teas, 
    selectedCategory,
    setSelectedCategory,
    isLoading, 
    error,
    lastUpdated
  } = useTeas();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ErrorMessage message={error} variant="alert" />
      </div>
    );
  }

  return (
    <TeaListView 
      teas={teas}
      selectedCategory={selectedCategory}
      onCategoryChange={setSelectedCategory}
      lastUpdated={lastUpdated}
    />
  );
};

export default TeaList; 