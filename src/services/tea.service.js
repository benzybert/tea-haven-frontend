import api from './api';

const TEA_API = '/teas';

export const teaService = {
  getAllTeas: () => 
    api.get(`${TEA_API}/search`),

  getTeaById: (id) => 
    api.get(`${TEA_API}/${id}`),

  getTeasByType: (type) => 
    api.get(`${TEA_API}/type/${type}`),

  getTeaCategories: () => 
    api.get(`${TEA_API}/categories`),

  searchTeas: (query) =>
    api.get(`${TEA_API}/search`, { params: { query } }),

  getFeaturedTeas: () =>
    api.get(`${TEA_API}/featured`)
};
