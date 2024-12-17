import React from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';

const TeaProductCard = ({ 
  name = "Classic Earl Grey",
  price = 19.99,
  description = "A sophisticated blend with bergamot oil",
  imageUrl = "/api/placeholder/300/300",
  rating = 4.5,
  category = "Black Tea",
  isNew = false
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
        
        {/* Wishlist Button */}
        <button 
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white shadow-sm 
                     transition-all duration-300 hover:shadow-md"
          aria-label="Add to wishlist"
        >
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>

        {/* New Badge */}
        {isNew && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
            New
          </span>
        )}

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

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${
                  index < Math.floor(rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">{rating}</span>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        {/* Add to Cart Button */}
        <button 
          className="w-full bg-green-600 text-white font-medium py-2.5 px-4 rounded-lg
                     flex items-center justify-center gap-2 transition-colors duration-300
                     hover:bg-green-700 focus:ring-4 focus:ring-green-100"
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default TeaProductCard;