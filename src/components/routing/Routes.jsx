import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Home';
import LoginForm from '../auth/LoginForm';
import RegisterForm from '../auth/RegisterForm';
import ForgotPasswordForm from '../auth/ForgotPasswordForm';
import ResetPasswordForm from '../auth/ResetPasswordForm';
import ProtectedRoute from './ProtectedRoute';
import Profile from '../Profile';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/forgot-password" element={<ForgotPasswordForm />} />
      <Route path="/reset-password/:token" element={<ResetPasswordForm />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      {/* Add a catch-all route for 404 */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;