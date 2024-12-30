// src/components/container/layout/Navigation.jsx
import React from 'react';
import PropTypes from 'prop-types';
import AuthenticatedNav from './auth/AuthenticatedNav';
import UnauthenticatedNav from './auth/UnauthenticatedNav';

const Navigation = ({ isAuthenticated, user }) => (
  <div className="space-x-4">
    {isAuthenticated ? (
      <AuthenticatedNav userName={user?.name} />
    ) : (
      <UnauthenticatedNav />
    )}
  </div>
);

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string
  })
};

export default Navigation;