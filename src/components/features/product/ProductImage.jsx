import React from 'react';

const ProductImage = ({ imageUrl, name, category }) => (
  <div className="relative h-72 overflow-hidden">
    <img 
      src={imageUrl} 
      alt={name} 
      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
    />
    <span className="absolute bottom-4 left-4 px-3 py-1 bg-black/60 text-white text-xs rounded-full">
      {category}
    </span>
  </div>
);

export default ProductImage; 