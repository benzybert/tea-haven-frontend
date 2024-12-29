// src/components/presentational/forms/Input.jsx
const Input = ({ 
    label, 
    error, 
    className = '', 
    isFirst = false, 
    isLast = false,
    ...props 
  }) => {
    const baseClasses = 'appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm';
    const roundedClasses = `${isFirst ? 'rounded-t-md' : ''} ${isLast ? 'rounded-b-md' : ''}`;
    
    return (
      <div>
        {label && (
          <label htmlFor={props.id} className="sr-only">
            {label}
          </label>
        )}
        <input
          className={`${baseClasses} ${roundedClasses} ${className}`}
          {...props}
        />
      </div>
    );
  };

export default Input;