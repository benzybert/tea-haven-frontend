import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './styles/Cart.css';

const Cart = () => {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    total,
    itemCount 
  } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart-page container">
        <div className="cart-empty">
          <h2 className="cart-empty-message">Your cart is empty</h2>
          <Link to="/products" className="button button-primary">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page container">
      <h1 className="page-title">Shopping Cart</h1>
      
      <div className="cart-content">
        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img 
                src={item.image} 
                alt={item.title}
                className="cart-item-image"
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
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="cart-item-price">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              <button 
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          
          <div className="summary-row">
            <span>Items ({itemCount}):</span>
            <span>${total.toFixed(2)}</span>
          </div>
          
          <div className="summary-row">
            <span>Shipping:</span>
            <span>FREE</span>
          </div>

          <div className="summary-row summary-total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="button button-primary checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>

      <Link to="/products" className="continue-shopping">
        ← Continue Shopping
      </Link>
    </div>
  );
};

export default Cart;
