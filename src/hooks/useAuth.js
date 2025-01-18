import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ROUTES } from '../constants/routes';

export const useAuth = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const { user, setUser, login, register, forgotPassword } = context;

  const wrappedLogin = async (credentials) => {
    await login(credentials);
    navigate(ROUTES.HOME);
  };

  const wrappedRegister = async (userData) => {
    await register(userData);
    navigate(ROUTES.HOME);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate(ROUTES.LOGIN);
  };

  return {
    user,
    isAuthenticated: !!user,
    login: wrappedLogin,
    register: wrappedRegister,
    logout,
    forgotPassword
  };
};