// src/components/container/layout/Logo.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/" className="text-2xl font-bold text-indigo-600">
    Tea Haven
  </Link>
);

export default Logo;