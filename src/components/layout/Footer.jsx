import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Tea Haven. All rights reserved.
          </p>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-gray-500 hover:text-green-600">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-500 hover:text-green-600">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-500 hover:text-green-600">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;