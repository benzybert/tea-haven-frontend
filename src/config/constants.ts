export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const STORAGE_KEYS = {
  TOKEN: 'tea_haven_token',
  USER: 'tea_haven_user',
  CART: 'tea_haven_cart'
};

export const AUTH_ROUTES = {
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  PROFILE: '/profile'
};

export const PRODUCT_ROUTES = {
  LIST: '/products',
  DETAIL: '/products/:id',
  CART: '/cart',
  CHECKOUT: '/checkout'
};