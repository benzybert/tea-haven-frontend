import axios from 'axios';
import { API_BASE_URL } from '../../../config/constants';
import { ProductFilters } from '../types';

const PRODUCTS_API = `${API_BASE_URL}/api/products`;

export const productsApi = {
  getProducts: (filters?: ProductFilters) =>
    axios.get(PRODUCTS_API, { params: filters }),

  getProduct: (id: string) =>
    axios.get(`${PRODUCTS_API}/${id}`),

  getCategories: () =>
    axios.get(`${PRODUCTS_API}/categories`),
};