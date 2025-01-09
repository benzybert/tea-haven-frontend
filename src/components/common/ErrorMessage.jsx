import React from 'react';
import PropTypes from 'prop-types';

const ERROR_VARIANTS = {
  inline: 'text-center text-red-600 p-4',
  alert: 'rounded-md bg-red-50 p-4 mb-4 flex items-center'
};

const ErrorIcon = () => (
  <div className="flex-shrink-0 mr-3">
    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

const ErrorMessage = ({ message, variant = 'inline' }) => {
  if (!message) return null;

  const variantClass = ERROR_VARIANTS[variant] || ERROR_VARIANTS.inline;
  const messageClass = variant === 'alert' ? 'text-sm font-medium text-red-800' : '';

  return (
    <div className={variantClass}>
      {variant === 'alert' && <ErrorIcon />}
      <div className={messageClass}>{message}</div>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
  variant: PropTypes.oneOf(['inline', 'alert'])
};

export default ErrorMessage; 