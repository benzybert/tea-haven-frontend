import { apiClient } from '../apiClient';
import { LoginData, RegisterData, ResetPasswordData, User } from '../../../types';

interface AuthResponse {
  user: User;
  token: string;
}

export const authApi = {
  login: (data: LoginData) =>
    apiClient.post<AuthResponse>('/auth/login', data),

  register: (data: RegisterData) =>
    apiClient.post<AuthResponse>('/auth/register', data),

  forgotPassword: (data: { email: string }) =>
    apiClient.post<{ message: string }>('/auth/forgot-password', data),

  resetPassword: (data: ResetPasswordData) =>
    apiClient.post<{ message: string }>('/auth/reset-password', data),

  verifyToken: (token: string) =>
    apiClient.post<{ valid: boolean }>('/auth/verify-token', { token }),

  refreshToken: () =>
    apiClient.post<{ token: string }>('/auth/refresh-token')
};
