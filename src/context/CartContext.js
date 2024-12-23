import React, { createContext, useContext, useState, useEffect } from 'react';
import { cartService } from '../services/cart.service';
import { STORAGE_KEYS } from '../config/constants';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load cart from storage on initial load
  useEffect(() => {
    const storedCart = localStorage.getItem(STORAGE_KEYS.CART);
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    fetchCart();
  }, []);

  // Save cart to storage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cartItems));
  }, [cartItems]);

  const fetchCart = async () => {
    try {
      setIsLoading(true);
      const response = await cartService.getCart();
      setCartItems(response.data.items);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch cart');
      console.error('Failed to fetch cart:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    try {
      setIsLoading(true);
      await cartService.addToCart(productId, quantity);
      await fetchCart(); // Refresh cart after adding item
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add item to cart');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    if (quantity < 1) return;
    try {
      setIsLoading(true);
      await cartService.updateQuantity(productId, quantity);
      await fetchCart();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update quantity');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      setIsLoading(true);
      await cartService.removeFromCart(productId);
      await fetchCart();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to remove item');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const clearCart = async () => {
    try {
      setIsLoading(true);
      await cartService.clearCart();
      setCartItems([]);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to clear cart');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isLoading,
        error,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getCartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
