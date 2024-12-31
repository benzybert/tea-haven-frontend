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
        return 'max-w-md';
      case 'form':
        return 'max-w-md';
      default:
        return 'max-w-7xl';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className={`w-full ${getTypeSpecificStyles()} space-y-8`}>
        {title && (
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
        )}
        {children}
      </div>
    </div>
  );
};

export default Layout; 