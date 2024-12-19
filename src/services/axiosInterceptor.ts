import axios from 'axios';
import { authService } from './authService';

// Function to set up axios interceptors
export const setupAxiosInterceptors = () => {
  // Request interceptor
  axios.interceptors.request.use(
    (config) => {
      const token = authService.getToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      // If unauthorized (token expired or invalid), logout user
      if (error.response && error.response.status === 401) {
        authService.logout();
        // Redirect to login page
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );
};