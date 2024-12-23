import api from './api';

const PRODUCTS_API = '/products';

export const productService = {
  getAllProducts: (params) => 
    api.get(PRODUCTS_API, { params }),

  getProduct: (id) => 
    api.get(`${PRODUCTS_API}/${id}`),

  searchProducts: (query) =>
    api.get(`${PRODUCTS_API}/search`, { params: { q: query } }),

  getCategories: () =>
    api.get(`${PRODUCTS_API}/categories`)
};
