import { useSelector } from 'react-redux';

export const useAuth = () => {
  const auth = useSelector((state) => state.auth);

  return {
    isAuthenticated: Boolean(auth.user),
    user: auth.user,
    isLoading: auth.isLoading,
    isError: auth.isError,
    isSuccess: auth.isSuccess,
    message: auth.message,
  };
};
