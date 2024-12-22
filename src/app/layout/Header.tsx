import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config/constants';
import { useAuth } from '../../store/auth/AuthContext';

const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to={ROUTES.HOME} className="text-xl font-bold text-green-700">
            Tea Haven
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link 
              to={ROUTES.PRODUCTS}
              className="text-gray-600 hover:text-green-700"
            >
              Products
            </Link>
            {/* Add more nav items here */}
          </nav>

          <div className="flex items-center space-x-4">
            {isAuthenticated && user ? (
              <>
                <Link 
                  to={ROUTES.PROFILE}
                  className="text-gray-600 hover:text-green-700"
                >
                  Profile
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-green-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to={ROUTES.LOGIN}
                  className="text-gray-600 hover:text-green-700"
                >
                  Login
                </Link>
                <Link
                  to={ROUTES.REGISTER}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;