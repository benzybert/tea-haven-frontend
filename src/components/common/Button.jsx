import React from 'react';
import PropTypes from 'prop-types';

const VARIANTS = {
  primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
  danger: 'bg-red-600 hover:bg-red-700 text-white'
};

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  return (
    <button
      className={`
        inline-flex justify-center py-2 px-4 border border-transparent 
        shadow-sm text-sm font-medium rounded-md focus:outline-none 
        focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 
        disabled:opacity-50 ${VARIANTS[variant]} ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  className: PropTypes.string
};

export default Button; 