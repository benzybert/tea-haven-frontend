import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config/constants';

const TeaProductCard = ({ product, onAddToCart }) => {
  const { id, name, price, description, image, rating, inStock } = product;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={ROUTES.PRODUCTS.DETAILS(id)}>
        <div className="relative pb-[100%] overflow-hidden">
          <img
            src={image || '/placeholder-tea.jpg'}
            alt={name}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link 
          to={ROUTES.PRODUCTS.DETAILS(id)}
          className="block text-lg font-semibold text-gray-900 hover:text-indigo-600 mb-2"
        >
          {name}
        </Link>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold text-gray-900">${price.toFixed(2)}</span>
          {rating && (
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="ml-1 text-gray-600">{rating.toFixed(1)}</span>
            </div>
          )}
        </div>

        <button
          onClick={onAddToCart}
          disabled={!inStock}
          className={`w-full py-2 px-4 rounded-md ${inStock 
            ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default TeaProductCard;
