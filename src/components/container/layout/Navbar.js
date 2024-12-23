import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <span className="text-3xl mr-2">🍵</span>
          TeaHaven
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-green-200 transition">Home</Link>
          <Link to="/products" className="hover:text-green-200 transition">Shop</Link>
          <Link to="/about" className="hover:text-green-200 transition">About</Link>
          <Link to="/cart" className="hover:text-green-200 transition">Cart (0)</Link>
          <Link to="/login" className="bg-green-700 px-4 py-2 rounded-lg hover:bg-green-800 transition">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;