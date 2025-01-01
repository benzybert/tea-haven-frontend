import Home from '../pages/Home';
import Products from '../pages/Products';
import Profile from '../pages/Profile';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';
import ForgotPasswordForm from '../components/auth/ForgotPasswordForm';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  PRODUCTS: '/products',
  FORGOT_PASSWORD: '/forgot-password'
};

export const publicRoutes = [
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.PRODUCTS, element: <Products /> },
  { path: ROUTES.LOGIN, element: <LoginForm /> },
  { path: ROUTES.REGISTER, element: <RegisterForm /> },
  { path: ROUTES.FORGOT_PASSWORD, element: <ForgotPasswordForm /> },
];

export const protectedRoutes = [
  { path: ROUTES.PROFILE, element: <Profile /> },
  // Add more protected routes here
]; 