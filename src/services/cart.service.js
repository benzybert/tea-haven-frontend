import api from './api';

const CART_API = '/cart';

export const cartService = {
  getCart: () => 
    api.get(CART_API),

  addToCart: (productId, quantity) =>
    api.post(`${CART_API}/add`, { productId, quantity }),

  updateQuantity: (productId, quantity) =>
    api.put(`${CART_API}/update`, { productId, quantity }),

  removeFromCart: (productId) =>
    api.delete(`${CART_API}/remove/${productId}`),

  clearCart: () =>
    api.delete(`${CART_API}/clear`)
};
