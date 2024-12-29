import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import LoginForm from '../../components/presentational/auth/LoginForm';
import RegisterForm from '../../components/presentational/auth/RegisterForm';
import ForgotPasswordForm from '../../components/presentational/auth/ForgotPasswordForm';
import ResetPasswordForm from '../../components/presentational/auth/ResetPasswordForm';
import Profile from '../../pages/Profile';
import Products from '../../pages/Products';
import ProtectedRoute from '../container/routing/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/forgot-password" element={<ForgotPasswordForm />} />
      <Route path="/reset-password/:token" element={<ResetPasswordForm />} />
      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />
      <Route path="/products" element={<Products />} />
      {/* Add a catch-all route for 404 */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;