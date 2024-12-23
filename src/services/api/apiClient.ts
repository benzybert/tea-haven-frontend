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
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.instance.interceptors.response.use(
      (response) => response,
      (error) => this.handleError(error)
    );
  }

  private handleError(error: AxiosError): Promise<ApiError> {
    if (error.response) {
      const data = error.response.data as { message?: string };
      return Promise.reject({
        message: data.message || 'An error occurred',
        status: error.response.status
      });
    }
    return Promise.reject({
      message: error.message || 'Network error',
      status: 500
    });
  }

  public async get<T>(url: string, params?: object): Promise<ApiResponse<T>> {
    const response: AxiosResponse = await this.instance.get(url, { params });
    return {
      data: response.data,
      status: response.status
    };
  }

  public async post<T>(url: string, data?: object): Promise<ApiResponse<T>> {
    const response: AxiosResponse = await this.instance.post(url, data);
    return {
      data: response.data,
      status: response.status
    };
  }

  public async put<T>(url: string, data?: object): Promise<ApiResponse<T>> {
    const response: AxiosResponse = await this.instance.put(url, data);
    return {
      data: response.data,
      status: response.status
    };
  }

  public async delete<T>(url: string): Promise<ApiResponse<T>> {
    const response: AxiosResponse = await this.instance.delete(url);
    return {
      data: response.data,
      status: response.status
    };
  }
}

export const apiClient = new ApiClient();
