import React, { useState } from 'react';
import { useCart } from '../../../context/CartContext';
import './styles/TeaProductCard.css';
import '../../../styles/animations.css';

const TeaProductCard = ({ product }) => {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const { title, description, price, image, inStock } = product;

  const handleAddToCart = () => {
    if (!inStock) return;
    
    setIsAdding(true);
    addItem(product, 1);

    // Reset animation after completion
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="product-card hover-lift animate-fadeIn">
      <div className="product-image-container">
        <img 
          src={image} 
          alt={title} 
          className="product-image hover-scale"
          onError={(e) => {
            e.target.src = '/images/tea-placeholder.jpg';
          }}
        />
        <div className="product-overlay"></div>
        <span className="product-price animate-slideInRight">
          ${price.toFixed(2)}
        </span>
      </div>

      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        
        <button
          onClick={handleAddToCart}
          className={`add-to-cart-btn button-press ${
            !inStock ? 'out-of-stock' : ''
          } ${isAdding ? 'animate-bounce' : ''}`}
          disabled={!inStock}
        >
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default TeaProductCard;
