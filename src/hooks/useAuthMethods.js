import { authService } from '../services/auth';
import { setTokens, removeTokens } from '../utils/tokenStorage';

export const useAuthMethods = (setUser, setIsLoading, setError) => {
  const handleAuthAction = async (action, data, errorMessage) => {
    setIsLoading(true);
    setError(null);
    try {
      const { data: response } = await action(data);
      setTokens(response.token, response.refreshToken);
      setUser(response.user);
      return response.user;
    } catch (err) {
      setError(err.response?.data?.message || errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const login = (credentials) => 
    handleAuthAction(authService.login, credentials, 'Login failed');

  const register = (userData) => 
    handleAuthAction(authService.register, userData, 'Registration failed');

  const logout = () => {
    removeTokens();
    setUser(null);
  };

  return { login, register, logout };
}; 