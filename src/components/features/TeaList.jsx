import React from 'react';
import { useTeas } from '../../hooks/useTeas';
import { useCategories } from '../../hooks/useCategories';
import { TEA_CATEGORIES } from '../../constants/categories';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';
import CategoryFilter from '../common/CategoryFilter';
import TeaGrid from '../common/TeaGrid';

const TeaList = () => {
  const { teas, loading, error } = useTeas();
  const { filter, setFilter, filteredItems } = useCategories(teas);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CategoryFilter 
          categories={TEA_CATEGORIES} 
          selected={filter}
          onChange={setFilter}
        />
        <TeaGrid items={filteredItems} />
      </div>
    </div>
  );
};

export default TeaList; 