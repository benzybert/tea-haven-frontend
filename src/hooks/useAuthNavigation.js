import { useNavigate } from 'react-router-dom';

export const useAuthNavigation = () => {
  const navigate = useNavigate();

  return {
    // Navigation methods
    goToHome: () => navigate('/'),
    goToLogin: () => navigate('/login'),
    goToRegister: () => navigate('/register'),
    
    // Auth success handlers
    onLoginSuccess: () => navigate('/'),
    onRegisterSuccess: () => navigate('/'),
    onResetSuccess: () => setTimeout(() => navigate('/login'), 3000),
  };
}; 