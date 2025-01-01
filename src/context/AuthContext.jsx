// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect } from 'react';
import useTokenAuth from '../hooks/useTokenAuth';
import { useAuthMethods } from '../hooks/useAuthMethods';

/**
 * AuthContext
 * Provides authentication state and methods to the application
 */
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

  const { login, register, logout } = useAuthMethods(setUser, setIsLoading, setError);

  useEffect(() => {
    validateToken();
  }, [validateToken]);

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