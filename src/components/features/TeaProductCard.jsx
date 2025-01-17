import React from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../../hooks/useCart';
import ProductImage from './product/ProductImage';
import ProductInfo from './product/ProductInfo';
import Button from '../common/Button';

const TeaProductCard = ({ 
  _id, 
  originalId, 
  name, 
  price, 
  description, 
  imageUrl = 'tea-placeholder.jpg', 
  category 
}) => {
  const { addToCart } = useCart();
  
  const getFullImageUrl = (url) => {
    if (!url) return '/images/products/tea-placeholder.jpg';
    return url.startsWith('/') ? url : `/images/products/${url}`;
  };

  const handleAddToCart = () => {
    const product = {
      id: originalId || _id,
      name,
      price,
      description,
      imageUrl: getFullImageUrl(imageUrl),
      category
    };
    console.log('Adding to cart:', product);
    addToCart(product);
  };

  return (
    <div className="
      group relative max-w-sm rounded-xl overflow-hidden
      bg-white border border-gray-100
      hover:border-gray-200 hover:shadow-lg
      transition-all duration-300
    ">
      <ProductImage 
        imageUrl={getFullImageUrl(imageUrl)} 
        name={name} 
        category={category} 
      />
      <ProductInfo 
        name={name} 
        price={price} 
        description={description} 
      />
      <div className="p-5 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

TeaProductCard.propTypes = {
  _id: PropTypes.string,
  originalId: PropTypes.number,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  category: PropTypes.string.isRequired
};

TeaProductCard.defaultProps = {
  imageUrl: 'tea-placeholder.jpg'
};

export default TeaProductCard;