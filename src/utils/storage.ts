import { STORAGE_KEYS } from '../config/constants';

export const storage = {
  getToken: (): string | null => {
    return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN) || 
           sessionStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  setToken: (token: string, remember: boolean = false): void => {
    if (remember) {
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
    } else {
      sessionStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
    }
  },

  removeToken: (): void => {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    sessionStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  getCart: () => {
    const cart = localStorage.getItem(STORAGE_KEYS.CART);
    return cart ? JSON.parse(cart) : [];
  },

  setCart: (cart: any) => {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  },

  clearCart: () => {
    localStorage.removeItem(STORAGE_KEYS.CART);
  }
};