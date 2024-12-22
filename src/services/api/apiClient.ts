import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { API_BASE_URL, STORAGE_KEYS } from '../../config/constants';

interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

interface ApiError {
  message: string;
  status: number;
}

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN) ||
                     sessionStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.response?.status === 401) {
          localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
          sessionStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
          window.location.href = '/login';
        }
        return Promise.reject(this.handleError(error));
      }
    );
  }

  private handleError(error: AxiosError): ApiError {
    if (error.response) {
      return {
        message: error.response.data?.message || 'An error occurred',
        status: error.response.status
      };
    }
    if (error.request) {
      return {
        message: 'No response received from server',
        status: 503
      };
    }
    return {
      message: error.message || 'Unknown error occurred',
      status: 500
    };
  }

  async get<T>(url: string, params?: object): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse = await this.client.get(url, { params });
      return {
        data: response.data,
        status: response.status
      };
    } catch (error) {
      throw this.handleError(error as AxiosError);
    }
  }

  async post<T>(url: string, data?: object): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse = await this.client.post(url, data);
      return {
        data: response.data,
        status: response.status
      };
    } catch (error) {
      throw this.handleError(error as AxiosError);
    }
  }

  async put<T>(url: string, data?: object): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse = await this.client.put(url, data);
      return {
        data: response.data,
        status: response.status
      };
    } catch (error) {
      throw this.handleError(error as AxiosError);
    }
  }

  async delete<T>(url: string): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse = await this.client.delete(url);
      return {
        data: response.data,
        status: response.status
      };
    } catch (error) {
      throw this.handleError(error as AxiosError);
    }
  }
}

export const apiClient = new ApiClient();