import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import ProtectedRoute from '../auth/ProtectedRoute';
import { ROUTES, publicRoutes, protectedRoutes } from '../../constants/routes';

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      {publicRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            isAuthenticated && [ROUTES.LOGIN, ROUTES.REGISTER].includes(path) ? (
              <Navigate to={ROUTES.HOME} replace />
            ) : (
              element
            )
          }
        />
      ))}

      {/* Protected Routes */}
      {protectedRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<ProtectedRoute>{element}</ProtectedRoute>}
        />
      ))}

      {/* Fallback Route */}
      <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
    </Routes>
  );
};

export default AppRoutes;