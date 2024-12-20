import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  // Get auth state from Redux
  const { user, isLoading } = useSelector((state) => state.auth);
  const { cart } = useCart();

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Logo and navigation links */}
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-green-600">Tea Haven</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-green-600"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-green-600"
              >
                Products
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-green-600"
              >
                About
              </Link>
            </div>
          </div>

          {/* Right side - Cart and Auth buttons */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <Link
              to="/cart"
              className="p-2 text-gray-900 hover:text-green-600 relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Authentication Buttons */}
            {isLoading ? (
              <div className="animate-pulse bg-gray-200 h-10 w-20 rounded"></div>
            ) : user ? (
              <Link
                to="/profile"
                className="ml-4 px-4 py-2 text-gray-900 hover:text-green-600"
              >
                Profile
              </Link>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 border border-green-600 text-green-600 rounded hover:bg-green-50 transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;