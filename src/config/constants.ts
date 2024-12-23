export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const STORAGE_KEYS = {
  TOKEN: 'tea_haven_token',
  USER: 'tea_haven_user',
  CART: 'tea_haven_cart',
  AUTH_TOKEN: 'tea_haven_auth_token' // Added this for auth service
};

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  PROFILE: '/profile',
  PRODUCTS: '/products',
  CART: '/cart',
  CHECKOUT: '/checkout'
};

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    VERIFY_TOKEN: '/auth/verify-token',
    REFRESH_TOKEN: '/auth/refresh-token'
  },
  PRODUCTS: '/products',
  CART: '/cart',
  ORDERS: '/orders'
};
