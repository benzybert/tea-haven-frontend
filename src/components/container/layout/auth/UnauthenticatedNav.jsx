// src/components/container/layout/auth/UnauthenticatedNav.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const UnauthenticatedNav = () => (
  <div>
    <Link to="/login" className="text-indigo-600 hover:text-indigo-800 mr-4">
      Sign In
    </Link>
    <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
      Register
    </Link>
  </div>
);

export default UnauthenticatedNav;