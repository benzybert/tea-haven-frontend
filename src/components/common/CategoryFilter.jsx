/**
 * Single Responsibility: Provides a filterable category selection interface,
 * managing the display and selection of tea categories for product filtering.
 */
import React from 'react';
import { TEA_CATEGORIES } from '../../constants/categories';

const CategoryFilter = ({ selected, onChange }) => (
  <div className="mb-8 flex justify-center space-x-4">
    {TEA_CATEGORIES.map(category => (
      <button
        key={category.id}
        onClick={() => onChange(category.id)}
        className={`px-6 py-2 rounded-full transition-all ${
          selected === category.id 
            ? 'bg-green-600 text-white shadow-lg' 
            : 'bg-white text-gray-600 hover:bg-green-50'
        }`}
      >
        {category.name}
      </button>
    ))}
  </div>
);

export default CategoryFilter; 