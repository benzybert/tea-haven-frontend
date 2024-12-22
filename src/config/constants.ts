export const APP_NAME = 'Tea Haven';

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  CART: 'cart_items',
} as const;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  PRODUCTS: '/products',
  CART: '/cart',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    VERIFY: '/auth/me',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  PRODUCTS: {
    LIST: '/products',
    DETAIL: (id: string) => `/products/${id}`,
    CATEGORIES: '/products/categories',
  },
  CART: {
    ADD: '/cart/add',
    REMOVE: (id: string) => `/cart/remove/${id}`,
    UPDATE: '/cart/update',
    CLEAR: '/cart/clear',
  },
} as const;