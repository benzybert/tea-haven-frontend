import { apiClient } from '../apiClient';
import { Product, ProductFilters } from '../../../types';

interface ProductsResponse {
  products: Product[];
  total: number;
  page: number;
  totalPages: number;
}

const BASE_PATH = '/api/products';

export const productService = {
  getProducts: (filters?: ProductFilters) =>
    apiClient.get<ProductsResponse>(BASE_PATH, filters),

  getProduct: (id: string) =>
    apiClient.get<Product>(`${BASE_PATH}/${id}`),

  getCategories: () =>
    apiClient.get<string[]>(`${BASE_PATH}/categories`),

  searchProducts: (query: string) =>
    apiClient.get<ProductsResponse>(`${BASE_PATH}/search`, { query }),
};