import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductImage = ({ imageUrl, name, category }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="relative h-72 overflow-hidden bg-gray-100">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-pulse w-full h-full bg-gray-200" />
        </div>
      )}
      
      <img 
        src={hasError ? '/images/products/tea-placeholder.jpg' : imageUrl}
        alt={name}
        className={`
          w-full h-full object-cover
          transform group-hover:scale-105 transition-transform duration-500
          ${isLoading ? 'opacity-0' : 'opacity-100'}
        `}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      
      <span className="absolute bottom-4 left-4 px-3 py-1 bg-black/60 text-white text-xs rounded-full">
        {category}
      </span>
    </div>
  );
};

ProductImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default ProductImage; 