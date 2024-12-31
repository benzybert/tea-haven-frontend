/**
 * Tea Service
 * Handles all tea-related API interactions with consistent error handling and data transformation
 */
import api from './api';

const transformTeaResponse = (response) => ({
  ...response.data,
  products: response.data.products?.map(product => ({
    ...product,
    price: Number(product.price).toFixed(2)
  }))
});

const handleApiError = (error) => {
  const message = error.response?.data?.message || 'An unexpected error occurred';
  throw new Error(message);
};

export const teaService = {
  // Read operations
  getAllTeas: async (params = {}) => {
    try {
      const response = await api.get('/teas/search', { params });
      return transformTeaResponse(response);
    } catch (error) {
      handleApiError(error);
    }
  },

  getTeaById: async (id) => {
    try {
      const response = await api.get(`/teas/${id}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  getTeasByCategory: async (category) => {
    return teaService.getAllTeas({ category });
  },
  
  // Write operations
  createTea: async (teaData) => {
    try {
      const response = await api.post('/teas', teaData);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  updateTea: async (id, teaData) => {
    try {
      const response = await api.put(`/teas/${id}`, teaData);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  deleteTea: async (id) => {
    try {
      await api.delete(`/teas/${id}`);
    } catch (error) {
      handleApiError(error);
    }
  },
  
  // Category operations
  getCategories: async () => {
    try {
      const response = await api.get('/teas/categories');
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  }
};