/**
 * Single Responsibility: Provides a consistent page structure with configurable layouts
 * (auth, form, default) handling responsive container sizing and content centering.
 */
import React from 'react';
import PropTypes from 'prop-types';

const LAYOUT_TYPES = {
  auth: 'max-w-md',
  form: 'max-w-md',
  default: 'max-w-7xl'
};

const Layout = ({ 
  children, 
  title, 
  subtitle, 
  subtitleLink,
  type = 'default'
}) => {
  const containerWidth = LAYOUT_TYPES[type] || LAYOUT_TYPES.default;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className={`w-full ${containerWidth} space-y-8`}>
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleLink: PropTypes.node,
  type: PropTypes.oneOf(['auth', 'form', 'default'])
};

export default Layout; 