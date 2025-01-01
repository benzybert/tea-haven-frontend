import { authService } from '../services/auth';
import { setTokens, removeTokens } from '../utils/tokenStorage';

export const useAuthMethods = (setUser, setIsLoading, setError) => {
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

  return { login, register, logout };
}; 