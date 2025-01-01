// src/components/container/layout/Logo.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

const Logo = () => (
  <Link to={ROUTES.HOME} className="text-2xl font-bold text-indigo-600">
    Tea Haven
  </Link>
);

export default Logo;