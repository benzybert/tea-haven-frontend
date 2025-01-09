import React from 'react';
import ProductPrice from './ProductPrice';

const ProductInfo = ({ name, price, description }) => (
  <div className="p-5">
    <div className="flex justify-between items-start mb-3">
      <h3 className="font-semibold text-lg text-gray-800 group-hover:text-gray-900">
        {name}
      </h3>
      <ProductPrice price={price} />
    </div>
    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
      {description}
    </p>
  </div>
);

export default ProductInfo; 