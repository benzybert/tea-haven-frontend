import React from 'react';

/**
 * TeaProductCard Component
 * Displays basic tea product information in a card format
 */
const TeaProductCard = ({ 
  name,
  price,
  description,
  imageUrl,
  category
}) => {
  return (
    <div className="group relative max-w-sm rounded-xl overflow-hidden bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg">
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Category Tag */}
        <span className="absolute bottom-4 left-4 px-3 py-1 bg-black/60 text-white text-xs rounded-full">
          {category}
        </span>
      </div>

      {/* Content Container */}
      <div className="p-5">
        {/* Title and Price */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-semibold text-lg text-gray-800 group-hover:text-gray-900">
            {name}
          </h3>
          <div className="text-right">
            <span className="text-lg font-bold text-green-600">${price}</span>
            <span className="block text-xs text-gray-500 mt-1">per 100g</span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TeaProductCard;