import { AxiosResponse } from 'axios';
import axiosInstance from '../lib/axios';
import { API_ENDPOINTS } from '../config/constants';
import {
  LoginCredentials,
  RegisterData,
  AuthResponse,
  ForgotPasswordData,
  ResetPasswordData,
  User
} from '../types';

export const authService = {
  login: (credentials: LoginCredentials): Promise<AxiosResponse<AuthResponse>> =>
    axiosInstance.post(API_ENDPOINTS.AUTH.LOGIN, credentials),

  register: (data: RegisterData): Promise<AxiosResponse<AuthResponse>> =>
    axiosInstance.post(API_ENDPOINTS.AUTH.REGISTER, data),

  verifyToken: (): Promise<AxiosResponse<User>> =>
    axiosInstance.get(API_ENDPOINTS.AUTH.VERIFY),

  forgotPassword: (data: ForgotPasswordData): Promise<AxiosResponse<{ message: string }>> =>
    axiosInstance.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, data),

  resetPassword: (data: ResetPasswordData): Promise<AxiosResponse<{ message: string }>> =>
    axiosInstance.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, data),
};