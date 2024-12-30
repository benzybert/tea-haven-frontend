import api from './api';

export const fetchAllTeas = async () => {
    const response = await api.get('/teas/search');
    return response.data.products;
};