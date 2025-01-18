// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { authService } from '../services/auth';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const validateToken = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await authService.validateToken();
          setUser(response.data.user);
        }
      } catch (err) {
        localStorage.removeItem('token');
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    validateToken();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await authService.login(credentials);
      setUser(response.user);
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const register = async (userData) => {
    try {
      const response = await authService.register(userData);
      setUser(response.user);
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const forgotPassword = async (email) => {
    try {
      return await authService.forgotPassword(email);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const value = {
    user,
    setUser,
    isLoading,
    error,
    isAuthenticated: !!user,
    login,
    register,
    forgotPassword
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { useAuth } from '../hooks/useAuth';
export default AuthProvider;