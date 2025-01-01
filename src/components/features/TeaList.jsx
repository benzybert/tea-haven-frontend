/**
 * TeaList Components
 * Separates container and presentation logic
 */
import React from 'react';
import { useTeas } from '../../hooks/useTeas';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';
import CategoryFilter from '../common/CategoryFilter';
import TeaGrid from '../features/TeaGrid';

// Presentation Component
const TeaListView = ({ 
  teas, 
  selectedCategory, 
  onCategoryChange,
  lastUpdated 
}) => (
  <div className="bg-gray-50 min-h-screen py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Our Tea Collection</h2>
        {lastUpdated && (
          <span className="text-sm text-gray-500">
            Last updated: {new Date(lastUpdated).toLocaleTimeString()}
          </span>
        )}
      </div>
      
      <CategoryFilter 
        selected={selectedCategory}
        onChange={onCategoryChange}
      />

      <TeaGrid items={teas} />
    </div>
  </div>
);

// Container Component
const TeaList = () => {
  const { 
    teas, 
    selectedCategory,
    setSelectedCategory,
    isLoading, 
    error,
    lastUpdated
  } = useTeas();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} variant="alert" />;

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