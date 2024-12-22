import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { AuthContextType, LoginCredentials, RegisterData, User, ResetPasswordData } from '../../types';
import { authService } from '../../services/auth.service';
import { STORAGE_KEYS } from '../../config/constants';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const verifyToken = useCallback(async () => {
    const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN) ||
                 sessionStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);

    if (!token) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await authService.verifyToken();
      setUser(response.data);
    } catch (err) {
      console.error('Token verification failed:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  const login = useCallback(async (credentials: LoginCredentials) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.login(credentials);
      const { token, user } = response.data;
      
      // Store token
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
      
      setUser(user);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(async (data: RegisterData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.register(data);
      const { token, user } = response.data;
      
      // Store token
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
      
      setUser(user);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    sessionStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    setUser(null);
  }, []);

  const forgotPassword = useCallback(async (email: string) => {
    setIsLoading(true);
    setError(null);

    try {
      await authService.forgotPassword({ email });
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to send reset email');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const resetPassword = useCallback(async (data: ResetPasswordData) => {
    setIsLoading(true);
    setError(null);

    try {
      await authService.resetPassword(data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to reset password');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};