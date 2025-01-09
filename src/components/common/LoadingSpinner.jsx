import React from 'react';
import PropTypes from 'prop-types';

const SPINNER_SIZES = {
  sm: 'h-4 w-4',
  md: 'h-8 w-8',
  lg: 'h-12 w-12'
};

const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const spinnerSize = SPINNER_SIZES[size] || SPINNER_SIZES.md;

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className={`
        animate-spin rounded-full
        border-2 border-gray-200
        border-t-indigo-600
        ${spinnerSize}
      `} />
    </div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string
};

export default LoadingSpinner;