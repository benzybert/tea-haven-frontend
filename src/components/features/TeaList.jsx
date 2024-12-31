/**
 * Single Responsibility: Displays a filterable list of tea products by composing
 * reusable components and delegating data management to hooks.
 */
import React from 'react';
import { useTeas } from '../../hooks/useTeas';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';
import CategoryFilter from '../common/CategoryFilter';
import TeaGrid from '../features/TeaGrid'; // Updated import path
/**
 * TeaList Component
 * Displays a filterable list of tea products by composing
 * reusable components and delegating data management to hooks.
 */

const TeaList = () => {
  // Hooks
  const { 
    teas, 
    selectedCategory,
    setSelectedCategory,
    isLoading, 
    error 
  } = useTeas();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} variant="alert" />;

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">Our Tea Collection</h2>
        
        <CategoryFilter 
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />

        <TeaGrid items={teas} />
      </div>
    </div>
  );
};

export default TeaList; 