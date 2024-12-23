import React, { useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ResetPasswordForm } from '../../components/auth';
import { LoadingSpinner } from '../../components/common';
import { ROUTES } from '../../config/constants';

const ResetPasswordPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!token) {
      navigate(ROUTES.AUTH.FORGOT_PASSWORD);
    }
  }, [token, navigate]);

  if (isLoading) return <LoadingSpinner />;
  if (isAuthenticated) return <Navigate to={ROUTES.HOME} />;
  if (!token) return null;

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Set new password
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
