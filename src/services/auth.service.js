import api from './api';

const AUTH_API = '/auth';

export const authService = {
  login: (data) => 
    api.post(`${AUTH_API}/login`, data),

  register: (data) =>
    api.post(`${AUTH_API}/register`, data),

  forgotPassword: (data) =>
    api.post(`${AUTH_API}/forgot-password`, data),

  resetPassword: (data) =>
    api.post(`${AUTH_API}/reset-password`, data),

  logout: () =>
    api.post(`${AUTH_API}/logout`),

  verifyToken: () =>
    api.post(`${AUTH_API}/verify-token`),

  refreshToken: () =>
    api.post(`${AUTH_API}/refresh-token`)
};
