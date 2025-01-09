import React from 'react';
import PropTypes from 'prop-types';
import ProductImage from './product/ProductImage';
import ProductInfo from './product/ProductInfo';

const TeaProductCard = ({ name, price, description, imageUrl, category }) => {
  return (
    <div className="
      group relative max-w-sm rounded-xl overflow-hidden
      bg-white border border-gray-100
      hover:border-gray-200 hover:shadow-lg
      transition-all duration-300
    ">
      <ProductImage 
        imageUrl={imageUrl} 
        name={name} 
        category={category} 
      />
      <ProductInfo 
        name={name} 
        price={price} 
        description={description} 
      />
    </div>
  );
};

TeaProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default TeaProductCard;