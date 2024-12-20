import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">Welcome to Tea Haven</h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore our wide selection of premium teas and accessories.
        </p>
        <Link
          to="/products"
          className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Home;