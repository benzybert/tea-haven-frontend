import api from './api';

const BASE_URL = '/teas';

export const teaService = {
    getAllTeas: () => 
        api.get(`${BASE_URL}/search`),

    getTeaById: (id) => 
        api.get(`${BASE_URL}/${id}`),

    getTeasByType: (type) => 
        api.get(`${BASE_URL}/type/${type}`),

    getTeaCategories: () => 
        api.get(`${BASE_URL}/categories`),
        
    searchTeas: (query) =>
        api.get(`${BASE_URL}/search`, { params: { query } }),

    getFeaturedTeas: () =>
        api.get(`${BASE_URL}/featured`)
};
