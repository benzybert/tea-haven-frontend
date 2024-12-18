import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './styles/Cart.css';
import '../styles/animations.css';

const Cart = () => {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    total,
    itemCount 
  } = useCart();

  const [removingItems, setRemovingItems] = useState(new Set());

  const handleRemoveItem = (itemId) => {
    setRemovingItems(prev => new Set([...prev, itemId]));
    setTimeout(() => {
      removeItem(itemId);
      setRemovingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(itemId);
        return newSet;
      });
    }, 300); // Match animation duration
  };

  if (items.length === 0) {
    return (
      <div className="cart-page container animate-fadeIn">
        <div className="cart-empty animate-scaleIn">
          <h2 className="cart-empty-message">Your cart is empty</h2>
          <Link to="/products" className="button button-primary animate-bounce">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page container animate-fadeIn">
      <h1 className="page-title animate-slideInRight">Shopping Cart</h1>
      
      <div className="cart-content">
        <div className="cart-items stagger-children">
          {items.map((item) => (
            <div 
              key={item.id} 
              className={`cart-item hover-lift ${removingItems.has(item.id) ? 'animate-slideOutLeft' : 'animate-slideInRight'}`}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="cart-item-image hover-scale"
                onError={(e) => {
                  e.target.src = '/images/tea-placeholder.jpg';
                }}
              />
              
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>{item.type}</p>
              </div>

              <div className="cart-item-quantity">
                <div className="cart-quantity-controls">
                  <button 
                    className="quantity-btn button-press"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    className="quantity-btn button-press"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="cart-item-price animate-fadeIn">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              <button 
                className="remove-btn hover-scale"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary animate-slideInUp">
          <h2>Order Summary</h2>
          
          <div className="summary-row animate-fadeIn">
            <span>Items ({itemCount}):</span>
            <span>${total.toFixed(2)}</span>
          </div>
          
          <div className="summary-row animate-fadeIn">
            <span>Shipping:</span>
            <span>FREE</span>
          </div>

          <div className="summary-row summary-total animate-fadeIn">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="button button-primary checkout-btn button-press animate-fadeIn">
            Proceed to Checkout
          </button>
        </div>
      </div>

      <Link to="/products" className="continue-shopping hover-lift animate-fadeIn">
        ← Continue Shopping
      </Link>
    </div>
  );
};

export default Cart;
