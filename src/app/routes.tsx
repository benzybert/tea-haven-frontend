import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ProtectedRoute from '../components/routing/ProtectedRoute';

// Lazy loaded components
const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('../pages/auth/RegisterPage'));
const ForgotPasswordPage = lazy(() => import('../pages/auth/ForgotPasswordPage'));
const ResetPasswordPage = lazy(() => import('../pages/auth/ResetPasswordPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: '/register',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <RegisterPage />
      </Suspense>
    ),
  },
  {
    path: '/forgot-password',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ForgotPasswordPage />
      </Suspense>
    ),
  },
  {
    path: '/reset-password/:token',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ResetPasswordPage />
      </Suspense>
    ),
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <Suspense fallback={<div>Loading...</div>}>
          <ProfilePage />
        </Suspense>
      </ProtectedRoute>
    ),
  },
]);

export default router;
