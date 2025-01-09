import React, { createContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = useCallback((product, quantity = 1) => {
    setItems(currentItems => {
      const existingItemIndex = currentItems.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        // Create a new array with the updated item
        const newItems = [...currentItems];
        newItems[existingItemIndex] = {
          ...currentItems[existingItemIndex],
          quantity: currentItems[existingItemIndex].quantity + quantity
        };
        return newItems;
      }
      
      // Add new item
      return [...currentItems, { ...product, quantity }];
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setItems(currentItems => currentItems.filter(item => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity < 1) return;
    
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const getTotalItems = useCallback(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  const getTotalPrice = useCallback(() => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [items]);

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default CartProvider; 