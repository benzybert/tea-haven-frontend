import axios from 'axios';
import { API_BASE_URL } from '../../../config/constants';
import { LoginFormData, RegisterFormData, ResetPasswordFormData } from '../../../types';

const AUTH_API = `${API_BASE_URL}/api/auth`;

export const authApi = {
  login: (data: LoginFormData) => 
    axios.post(`${AUTH_API}/login`, data),

  register: (data: RegisterFormData) =>
    axios.post(`${AUTH_API}/register`, data),

  forgotPassword: (email: string) =>
    axios.post(`${AUTH_API}/forgot-password`, { email }),

  resetPassword: (data: ResetPasswordFormData) =>
    axios.post(`${AUTH_API}/reset-password`, data),

  verifyToken: () =>
    axios.get(`${AUTH_API}/verify`),
};