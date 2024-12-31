import React from 'react';

// Single layout component with type prop to determine specific styling/behavior
const Layout = ({ 
  children, 
  title, 
  subtitle, 
  subtitleLink,
  type = 'default' // 'auth' | 'form' | 'default'
}) => {
  const getTypeSpecificStyles = () => {
    switch(type) {
      case 'auth':
        return 'auth-specific-classes';
      case 'form':
        return 'form-specific-classes';
      default:
        return 'default-classes';
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ${getTypeSpecificStyles()}`}>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-center text-sm text-gray-600">
              {subtitle} {subtitleLink}
            </p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout; 