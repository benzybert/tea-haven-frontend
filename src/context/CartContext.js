import React, { createContext, useContext, useState, useCallback } from 'react';
import { useToast } from './ToastContext';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const { addToast } = useToast();

  // Add item to cart
  const addItem = useCallback((product, quantity = 1) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Update quantity if item exists
        const updatedItems = currentItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        addToast(`Updated ${product.title} quantity in cart`, 'success');
        return updatedItems;
      }
      
      // Add new item if it doesn't exist
      addToast(`Added ${product.title} to cart`, 'success');
      return [...currentItems, { ...product, quantity }];
    });
  }, [addToast]);

  // Remove item from cart
  const removeItem = useCallback((productId) => {
    setItems(currentItems => {
      const itemToRemove = currentItems.find(item => item.id === productId);
      if (itemToRemove) {
        addToast(`Removed ${itemToRemove.title} from cart`, 'success');
      }
      return currentItems.filter(item => item.id !== productId);
    });
  }, [addToast]);

  // Update item quantity
  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity < 1) {
      removeItem(productId);
      return;
    }

    setItems(currentItems =>
      currentItems.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  }, [removeItem]);

  // Clear cart
  const clearCart = useCallback(() => {
    setItems([]);
    addToast('Cart cleared', 'success');
  }, [addToast]);

  // Calculate total price
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Get total number of items
  const itemCount = items.reduce(
    (count, item) => count + item.quantity,
    0
  );

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    total,
    itemCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
