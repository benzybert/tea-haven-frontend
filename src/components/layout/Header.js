import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { ROUTES } from '../../config/constants';

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate(ROUTES.AUTH.LOGIN);
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to={ROUTES.HOME} className="text-2xl font-bold text-indigo-600">
            Tea Haven
          </Link>

          <nav className="flex items-center space-x-6">
            <Link to={ROUTES.PRODUCTS.LIST} className="text-gray-600 hover:text-indigo-600">
              Shop
            </Link>

            <Link to={ROUTES.CART.VIEW} className="text-gray-600 hover:text-indigo-600">
              Cart {cartItems?.length > 0 && `(${cartItems.length})`}
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to={ROUTES.PROFILE} className="text-gray-600 hover:text-indigo-600">
                  {user.username}
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-indigo-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to={ROUTES.AUTH.LOGIN} className="text-gray-600 hover:text-indigo-600">
                  Login
                </Link>
                <Link
                  to={ROUTES.AUTH.REGISTER}
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
