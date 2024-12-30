
  // src/components/common/forms/FormInput.jsx
  const FormInput = ({
    label,
    error,
    className = '',
    ...props
  }) => (
    <div>
      {label && (
        <label htmlFor={props.id} className="sr-only">
          {label}
        </label>
      )}
      <input
        className={`appearance-none rounded-none relative block w-full px-3 py-2 border 
                   border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none 
                   focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${className}`}
        {...props}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );