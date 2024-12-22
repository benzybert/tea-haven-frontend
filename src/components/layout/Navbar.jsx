import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../common';

const Navbar = () => {
  const { user, isLoading, isAuthenticated, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center h-16">
      {/* Left side - Logo and navigation links */}
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-xl font-bold text-green-600">
          Tea Haven
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-green-600"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-gray-600 hover:text-green-600"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-green-600"
          >
            About
          </Link>
        </div>
      </div>

      {/* Right side - Auth buttons */}
      <div className="flex items-center space-x-4">
        {isLoading ? (
          <div className="animate-pulse bg-gray-200 h-10 w-20 rounded"></div>
        ) : isAuthenticated ? (
          <div className="flex items-center space-x-4">
            <Link
              to="/profile"
              className="text-gray-600 hover:text-green-600"
            >
              Profile
            </Link>
            <Button
              variant="outline"
              onClick={logout}
              size="sm"
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="primary" size="sm">Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" size="sm">Register</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;