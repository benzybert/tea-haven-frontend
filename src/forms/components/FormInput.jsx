import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

const VARIANTS = {
  default: 'border-gray-300',
  error: 'border-red-300',
  success: 'border-green-300'
};

const FormInput = ({
  name,
  label,
  type = 'text',
  variant = 'default',
  isFirst = false,
  isLast = false,
  hideLabel = false,
  ...props
}) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const baseClasses = `
    appearance-none relative block w-full px-3 py-2 border
    placeholder-gray-500 text-gray-900 focus:outline-none 
    focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 
    sm:text-sm ${errors[name] ? VARIANTS.error : VARIANTS[variant]}
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
          htmlFor={name} 
          className={`block text-sm font-medium text-gray-700 ${hideLabel ? 'sr-only' : 'mb-1'}`}
        >
          {label}
        </label>
      )}
      <input
        {...register(name)}
        type={type}
        id={name}
        className={`${baseClasses} ${roundedClasses}`}
        {...props}
      />
      {errors[name] && (
        <p className="mt-1 text-sm text-red-600">{errors[name].message}</p>
      )}
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'error', 'success']),
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
  hideLabel: PropTypes.bool
};

export default FormInput; 