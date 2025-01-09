import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../common/Layout';
import ProtectedRoute from '../auth/ProtectedRoute';

const RouteRenderer = ({ routes, layoutType, isProtected = false }) => {
  const renderRoute = ({ path, element }) => (
    <Route
      key={path}
      path={path}
      element={
        isProtected ? (
          <ProtectedRoute>
            <Layout type={layoutType}>
              {element}
            </Layout>
          </ProtectedRoute>
        ) : (
          <Layout type={layoutType}>
            {element}
          </Layout>
        )
      }
    />
  );

  return <>{routes.map(renderRoute)}</>;
};

export default RouteRenderer; 