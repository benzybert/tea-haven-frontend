import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

const Header = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            Tea Haven
          </Link>

          <div className="space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Welcome, {user.name}</span>
                <Link
                  to="/profile"
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  Profile
                </Link>
              </div>
            ) : (
              <div>
                <Link
                  to="/login"
                  className="text-indigo-600 hover:text-indigo-800 mr-4"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;