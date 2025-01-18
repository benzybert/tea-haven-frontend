import Home from '../pages/Home';
import Products from '../pages/Products';
import Profile from '../pages/Profile';
import Cart from '../pages/Cart';
import LoginForm from '../forms/templates/auth/LoginForm';
import RegisterForm from '../forms/templates/auth/RegisterForm';
import ForgotPasswordForm from '../forms/templates/auth/password/ForgotPasswordForm';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  PROFILE: '/profile',
  PRODUCTS: '/products',
  CART: '/cart',
  CHECKOUT: '/checkout'
};

export const AUTH_ROUTES = [
  {
    path: ROUTES.LOGIN,
    component: LoginForm
  },
  {
    path: ROUTES.REGISTER,
    component: RegisterForm
  },
  {
    path: ROUTES.FORGOT_PASSWORD,
    component: ForgotPasswordForm
  }
];

export const publicRoutes = [
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.PRODUCTS, element: <Products /> },
  { path: ROUTES.CART, element: <Cart /> },
  { path: ROUTES.LOGIN, element: <LoginForm /> },
  { path: ROUTES.REGISTER, element: <RegisterForm /> },
  { path: ROUTES.FORGOT_PASSWORD, element: <ForgotPasswordForm /> },
];

export const protectedRoutes = [
  { path: ROUTES.PROFILE, element: <Profile /> },
  // Add more protected routes here
]; 