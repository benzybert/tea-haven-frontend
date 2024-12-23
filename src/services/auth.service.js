import axios from 'axios';
import { API_URL } from '../config/constants';

const AUTH_API = `${API_URL}/auth`;

export const authService = {
  login: (credentials) => 
    axios.post(`${AUTH_API}/login`, credentials),

  register: (userData) =>
    axios.post(`${AUTH_API}/register`, userData),

  forgotPassword: (email) =>
    axios.post(`${AUTH_API}/forgot-password`, { email }),

  resetPassword: (resetData) =>
    axios.post(`${AUTH_API}/reset-password`, resetData),

  verifyToken: () =>
    axios.get(`${AUTH_API}/verify`),

  refreshToken: () =>
    axios.post(`${AUTH_API}/refresh-token`),

  logout: () =>
    axios.post(`${AUTH_API}/logout`)
};
