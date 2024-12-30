// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect } from 'react';
import { authService } from '../services/auth';
import { setTokens, removeTokens } from '../utils/tokenStorage';
import useTokenAuth from '../hooks/useTokenAuth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const {
    user,
    setUser,
    isLoading,
    setIsLoading,
    error,
    setError,
    validateToken,
    isAuthenticated
  } = useTokenAuth();

  useEffect(() => {
    validateToken();
  }, [validateToken]);

  const login = async (credentials) => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await authService.login(credentials);
      setTokens(data.token, data.refreshToken);
      setUser(data.user);
      return data.user;
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData) => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await authService.register(userData);
      setTokens(data.token, data.refreshToken);
      setUser(data.user);
      return data.user;
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    removeTokens();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      error,
      login,
      logout,
      register,
      isAuthenticated
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export default AuthProvider;