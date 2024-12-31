import React from 'react';
import PropTypes from 'prop-types';

// Enhance Input component to handle all form input cases
const Input = ({ 
  label, 
  error, 
  className = '', 
  isFirst = false, 
  isLast = false,
  variant = 'default', // Add variant prop for different styles
  ...props 
}) => {
  const variants = {
    default: 'border-gray-300',
    error: 'border-red-300',
    success: 'border-green-300'
  };

  const baseClasses = `
    appearance-none relative block w-full px-3 py-2 border
    placeholder-gray-500 text-gray-900 focus:outline-none 
    focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 
    sm:text-sm ${variants[variant]}
  `;

  const roundedClasses = `
    ${isFirst ? 'rounded-t-md' : ''} 
    ${isLast ? 'rounded-b-md' : ''}
    ${(!isFirst && !isLast) ? 'rounded-md' : ''}
  `;
  
  return (
    <div className="form-control">
      {label && (
        <label 
          htmlFor={props.id} 
          className={`block text-sm font-medium text-gray-700 ${props.hideLabel ? 'sr-only' : 'mb-1'}`}
        >
          {label}
        </label>
      )}
      <input
        className={`${baseClasses} ${roundedClasses} ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'error', 'success']),
  hideLabel: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  type: 'text',
  variant: 'default',
  className: '',
  isFirst: false,
  isLast: false,
  hideLabel: false
};

export default Input;