import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

// Create AuthContext
const AuthContext = createContext(null);

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check authentication on initial load
  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem('token');
      
      if (token) {
        try {
          // Validate token and get user info
          const response = await api.get('/auth/me');
          setUser(response.data);
        } catch (err) {
          // Token is invalid or expired
          localStorage.removeItem('token');
          setUser(null);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Login Function
  const login = async (credentials) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await api.post('/auth/login', credentials);
      
      // Store token and user info
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      
      return response.data.user;
    } catch (err) {
      // Handle login errors
      setError(err.response?.data?.message || 'Login failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Register Function
  const register = async (userData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await api.post('/auth/register', userData);
      
      // Store token and user info
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      
      return response.data.user;
    } catch (err) {
      // Handle registration errors
      setError(err.response?.data?.message || 'Registration failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout Function
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  // Context value
  const authContextValue = {
    user,
    isLoading,
    error,
    login,
    logout,
    register,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};