// src/hooks/useTokenAuth.js
import { useState, useCallback } from 'react';
import { authService } from '../services/auth';
import { setTokens, removeTokens, getAccessToken } from '../utils/tokenStorage';

const useTokenAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const validateToken = useCallback(async () => {
    const token = getAccessToken();
    if (!token) {
      setIsLoading(false);
      return;
    }

    try {
      const { data } = await authService.getProfile();
      setUser(data);
    } catch {
      removeTokens();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    error,
    setError,
    validateToken,
    isAuthenticated: !!user
  };
};

export default useTokenAuth;