import api from '../config/api';

export const teaService = {
  getAllTeas: async () => {
    const response = await api.get('/teas');
    return response.data;
  },

  getTeaById: async (id) => {
    const response = await api.get(`/teas/${id}`);
    return response.data;
  },

  getTeasByCategory: async (category) => {
    const response = await api.get(`/teas/category/${category}`);
    return response.data;
  },

  searchTeas: async (query) => {
    const response = await api.get(`/teas/search?q=${query}`);
    return response.data;
  }
};