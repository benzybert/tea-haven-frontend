import { apiClient } from '../apiClient';
import { LoginFormData, RegisterFormData, ResetPasswordFormData, User } from '../../../types';

interface AuthResponse {
  user: User;
  token: string;
}

const BASE_PATH = '/api/auth';

export const authService = {
  login: (data: LoginFormData) =>
    apiClient.post<AuthResponse>(`${BASE_PATH}/login`, data),

  register: (data: RegisterFormData) =>
    apiClient.post<AuthResponse>(`${BASE_PATH}/register`, data),

  forgotPassword: (email: string) =>
    apiClient.post<{ message: string }>(`${BASE_PATH}/forgot-password`, { email }),

  resetPassword: (data: ResetPasswordFormData) =>
    apiClient.post<{ message: string }>(`${BASE_PATH}/reset-password`, data),

  verifyToken: () =>
    apiClient.get<{ user: User }>(`${BASE_PATH}/verify`),
};