import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTeas } from '../../../../hooks/useTeas'
import LoadingSpinner from '../../../presentational/common/LoadingSpinner'; 
import TeaProductCard from './TeaProductCard';


const TeaList = () => {
  const { teas, loading, error } = useTeas();  // Use the custom hook
  const [filter, setFilter] = useState('all');

  const filteredTeas = filter === 'all' 
    ? teas 
    : teas.filter(tea => tea.category?.toLowerCase() === filter);

  if (loading) return <LoadingSpinner />;

  if (error) return (
    <div className="text-center text-red-600 p-4">{error}</div>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Filter Section */}
        <div className="mb-8 flex justify-center space-x-4">
          {['all', 'green', 'black', 'herbal', 'oolong'].map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === type 
                  ? 'bg-green-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-green-50'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

          // tea grid
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredTeas.map(tea => (
            <TeaProductCard
              key={tea._id}
              name={tea.name}
              price={tea.price}
              description={tea.description}
              imageUrl={tea.image}
              rating={tea.rating}
              category={tea.category}
              isNew={tea.isNew}
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