export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const STORAGE_KEYS = {
  USER: 'tea_haven_user',
  TOKEN: 'tea_haven_token',
  REFRESH_TOKEN: 'tea_haven_refresh_token',
  CART: 'tea_haven_cart'
};

export const ROUTES = {
  HOME: '/',
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password'
  },
  PRODUCTS: {
    LIST: '/products',
    DETAILS: (id) => `/products/${id}`
  },
  CART: {
    VIEW: '/cart',
    CHECKOUT: '/checkout'
  },
  PROFILE: '/profile'
};

export const TEA_CATEGORIES = {
  BLACK: 'black',
  GREEN: 'green',
  OOLONG: 'oolong',
  WHITE: 'white',
  HERBAL: 'herbal',
  ROOIBOS: 'rooibos'
};
