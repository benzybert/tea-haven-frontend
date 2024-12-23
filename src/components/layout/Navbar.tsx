import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

const Navbar: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { cartItems } = useCart();

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-4">
            <Link
              to="/products"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Products
            </Link>
            {isAuthenticated && (
              <Link
                to="/orders"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Orders
              </Link>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Cart ({cartItems?.length || 0})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
