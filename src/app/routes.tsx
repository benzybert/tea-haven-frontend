import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../config/constants';

// Page Components
import { HomePage, ProfilePage, NotFoundPage } from '../pages';

// Auth Components
import { 
  LoginForm, 
  RegisterForm, 
  ForgotPasswordForm, 
  ResetPasswordForm,
  ProtectedRoute 
} from '../features/auth/components';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.LOGIN} element={<LoginForm />} />
      <Route path={ROUTES.REGISTER} element={<RegisterForm />} />
      <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordForm />} />
      <Route path={`${ROUTES.RESET_PASSWORD}/:token`} element={<ResetPasswordForm />} />
      <Route 
        path={ROUTES.PROFILE} 
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;