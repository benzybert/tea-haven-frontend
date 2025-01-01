import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Layout from '../common/Layout';
import LoadingSpinner from '../common/LoadingSpinner';
import { publicRoutes, protectedRoutes } from '../../constants/routes';
import ProtectedRoute from '../auth/ProtectedRoute';

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