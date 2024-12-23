import { apiClient } from '../apiClient';
import { CartItem } from '../../../types';

interface CartResponse {
  items: CartItem[];
  total: number;
  totalItems: number;
}

const BASE_PATH = '/api/cart';

export const cartService = {
  getCart: () =>
    apiClient.get<CartResponse>(BASE_PATH),

  addToCart: (productId: string, quantity: number = 1) =>
    apiClient.post<CartResponse>(`${BASE_PATH}/add`, { productId, quantity }),

  updateQuantity: (productId: string, quantity: number) =>
    apiClient.put<CartResponse>(`${BASE_PATH}/update`, { productId, quantity }),

  removeFromCart: (productId: string) =>
    apiClient.delete<CartResponse>(`${BASE_PATH}/remove/${productId}`),

  clearCart: () =>
    apiClient.delete<{ message: string }>(`${BASE_PATH}/clear`),
};