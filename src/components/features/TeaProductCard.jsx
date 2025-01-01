import React from 'react';
import ProductImage from './product/ProductImage';
import ProductInfo from './product/ProductInfo';

const TeaProductCard = ({ name, price, description, imageUrl, category }) => {
  return (
    <div className="group relative max-w-sm rounded-xl overflow-hidden bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg">
      <ProductImage imageUrl={imageUrl} name={name} category={category} />
      <ProductInfo name={name} price={price} description={description} />
    </div>
  );
};

export default TeaProductCard;