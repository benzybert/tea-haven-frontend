import React from 'react';

const ProductPrice = ({ price }) => (
  <div className="text-right">
    <span className="text-lg font-bold text-green-600">${price}</span>
    <span className="block text-xs text-gray-500 mt-1">per 100g</span>
  </div>
);

export default ProductPrice; 