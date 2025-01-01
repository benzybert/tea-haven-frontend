/**
 * Single Responsibility: Provides a filterable category selection interface,
 * managing the display and selection of tea categories for product filtering.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { TEA_CATEGORIES } from '../../constants/categories';

const BUTTON_STYLES = {
  base: 'px-6 py-2 rounded-full transition-all',
  selected: 'bg-indigo-600 text-white shadow-lg',
  default: 'bg-white text-gray-600 hover:bg-indigo-50'
};

const CategoryFilter = ({ selected, onChange }) => {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-4">
      {TEA_CATEGORIES.map(category => (
        <button
          key={category.id}
          onClick={() => onChange(category.id)}
          className={`
            ${BUTTON_STYLES.base}
            ${selected === category.id ? BUTTON_STYLES.selected : BUTTON_STYLES.default}
          `}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

CategoryFilter.propTypes = {
  selected: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default CategoryFilter; 