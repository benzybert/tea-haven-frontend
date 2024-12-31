// src/components/container/layout/auth/AuthenticatedNav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthenticatedNav = ({ userName }) => (
  <div className="flex items-center space-x-4">
    <span className="text-gray-600">Welcome, {userName || 'Guest'}</span>
    <Link to="/profile" className="text-indigo-600 hover:text-indigo-800">
      Profile
    </Link>
  </div>
);

AuthenticatedNav.propTypes = {
  userName: PropTypes.string
};

export default AuthenticatedNav;