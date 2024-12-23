import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config/constants';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Tea Haven</h3>
            <p className="text-gray-400">
              Your premier destination for premium teas and accessories.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to={ROUTES.HOME} className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to={ROUTES.PRODUCTS.LIST} className="hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link to={ROUTES.CART.VIEW} className="hover:text-white">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="text-gray-400 not-italic">
              <p>Email: support@teahaven.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 Tea Street</p>
              <p>Tea City, TC 12345</p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tea Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
