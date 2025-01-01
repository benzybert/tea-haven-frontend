import api from '../utils/axios';

export const teaService = {
  // Read operations
  getAllTeas: () => api.get('/teas/search').then(res => res.data.products),
  getTeaById: (id) => api.get(`/teas/${id}`).then(res => res.data),
  getTeasByCategory: (category) => api.get(`/teas/search?category=${category}`).then(res => res.data.products),
  
  // Write operations
  createTea: (teaData) => api.post('/teas', teaData),
  updateTea: (id, teaData) => api.put(`/teas/${id}`, teaData),
  deleteTea: (id) => api.delete(`/teas/${id}`),
  
  // Category operations
  getCategories: () => api.get('/teas/categories').then(res => res.data)
};