import React, { useState } from 'react';
import { useTeas } from '../../hooks/useTeas';
import LoadingSpinner from '../common/LoadingSpinner';
import TeaProductCard from './TeaProductCard';

const TeaList = ({ displayStyle = 'grid' }) => {
  const { teas, loading, error } = useTeas();
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Teas' },
    { id: 'green', name: 'Green Tea' },
    { id: 'black', name: 'Black Tea' },
    { id: 'oolong', name: 'Oolong Tea' },
    { id: 'herbal', name: 'Herbal Tea' }
  ];

  const filteredTeas = filter === 'all' 
    ? teas 
    : teas.filter(tea => tea.category?.toLowerCase() === filter);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-center text-red-600 p-4">{error}</div>;

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex justify-center space-x-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === category.id 
                  ? 'bg-green-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-green-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className={`grid ${displayStyle === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : ''} gap-8`}>
          {filteredTeas.map(tea => (
            <TeaProductCard
              key={tea._id}
              {...tea}
            />
          ))}
        </div>

        {filteredTeas.length === 0 && (
          <div className="text-center text-gray-600 py-12">
            No teas found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default TeaList; 