import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { authService } from '../services/auth';
import { ROUTES } from '../constants/routes';

export const useAuth = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  const login = async (credentials) => {
    const data = await authService.login(credentials);
    setUser(data.user);
    navigate(ROUTES.HOME);
  };

  const register = async (userData) => {
    const data = await authService.register(userData);
    setUser(data.user);
    navigate(ROUTES.HOME);
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
    navigate(ROUTES.LOGIN);
  };

  const changePassword = async (data) => {
    await authService.changePassword(data);
  };

  const forgotPassword = async (email) => {
    await authService.forgotPassword(email);
  };

  const resetPassword = async (token, password) => {
    await authService.resetPassword(token, password);
    navigate(ROUTES.LOGIN);
  };

  return {
    user,
    login,
    register,
    logout,
    changePassword,
    forgotPassword,
    resetPassword,
    isAuthenticated: !!user
  };
}; 