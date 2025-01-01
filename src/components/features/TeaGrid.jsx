import React from 'react';
import PropTypes from 'prop-types';
import TeaProductCard from './TeaProductCard';

const EmptyState = () => (
  <div className="text-center py-12">
    <p className="text-gray-600">No teas found in this category.</p>
    <p className="text-sm text-gray-500 mt-2">Try selecting a different category.</p>
  </div>
);

const TeaGrid = ({ items = [] }) => {
  if (items.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="
      grid gap-6 md:gap-8
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-3 
      xl:grid-cols-4
    ">
      {items.map(tea => (
        <TeaProductCard
          key={tea.id}
          {...tea}
        />
      ))}
    </div>
  );
};

TeaGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired
    })
  )
};

export default TeaGrid; 