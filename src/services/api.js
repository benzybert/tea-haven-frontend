import axios from 'axios';
/*
  This file contains the functions that make the API calls to the backend.
  The functions use the axios library to make the requests to the backend server.
  The functions are used in the components to fetch the data from the backend.
*/

const BASE_URL = 'http://localhost:5001/api/teas';

export const fetchAllTeas = async () => {
  const response = await api.get(`${BASE_URL}/search`);
  return response.data.products;
};

export const fetchTeaById = async (id) => {
  const response = await api.get(`${BASE_URL}/${id}`);
  return response.data;
};

export const fetchTeasByType = async (type) => {
  const response = await api.get(`${BASE_URL}/type/${type}`);
  return response.data.products;
};

const api = axios.create({
  baseURL: 'http://localhost:5001/api',  // Changed from 5001 to 5000
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5001
});

// Add a request interceptor
api.interceptors.request.use(
  config => {
    console.log('Making request to:', config.url);
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  error => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  response => {
    console.log('Received response from:', response.config.url);
    return response;
  },
  error => {
    console.error('Response error:', {
      url: error.config?.url,
      status: error.response?.status,
      message: error.message,
      response: error.response?.data
    });

    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;