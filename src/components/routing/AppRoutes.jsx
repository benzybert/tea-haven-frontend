import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

// Layout Components
import Layout from '../common/Layout';
import LoadingSpinner from '../common/LoadingSpinner';

// Page Components
import Home from '../../pages/Home';
import Products from '../../pages/Products';
import Profile from '../../pages/Profile';

// Auth Components
import LoginForm from '../auth/LoginForm';
import RegisterForm from '../auth/RegisterForm';
import ForgotPasswordForm from '../auth/ForgotPasswordForm';
import ResetPasswordForm from '../auth/ResetPasswordForm';
import ProtectedRoute from '../auth/ProtectedRoute';

// Route Configurations
const publicRoutes = [
  { path: '/', element: <Home /> },
  { path: '/products', element: <Products /> },
  { path: '/login', element: <LoginForm /> },
  { path: '/register', element: <RegisterForm /> },
  { path: '/forgot-password', element: <ForgotPasswordForm /> },
  { path: '/reset-password/:token', element: <ResetPasswordForm /> },
];

const protectedRoutes = [
  { path: '/profile', element: <Profile /> },
  // Add more protected routes here
];

const AppRoutes = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <Layout type="default">
        <LoadingSpinner />
      </Layout>
    );
  }

  return (
    <Routes>
      {/* Public Routes */}
      {publicRoutes.map(({ path, element }) => (
        <Route 
          key={path} 
          path={path} 
          element={
            <Layout type="default">
              {element}
            </Layout>
          } 
        />
      ))}

      {/* Protected Routes */}
      {protectedRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <ProtectedRoute>
              <Layout type="auth">
                {element}
              </Layout>
            </ProtectedRoute>
          }
        />
      ))}

      {/* Catch-all route */}
      <Route 
        path="*" 
        element={
          <Layout type="default">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900">404 Not Found</h2>
              <p className="mt-2 text-gray-600">The page you're looking for doesn't exist.</p>
            </div>
          </Layout>
        } 
      />
    </Routes>
  );
};

export default AppRoutes;