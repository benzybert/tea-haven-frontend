import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',  // Changed from 5001 to 5000
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000
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