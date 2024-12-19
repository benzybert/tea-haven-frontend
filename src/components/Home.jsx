import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Home = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Tea Haven</h1>
      
      {isAuthenticated ? (
        <div>
          <p className="text-lg mb-4">Hello, {user.name}! Ready to explore our amazing tea collection?</p>
          <Link
            to="/profile"
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            View Profile
          </Link>
        </div>
      ) : (
        <div>
          <p className="text-lg mb-4">Discover the finest tea selections from around the world.</p>
          <div className="space-x-4">
            <Link
              to="/login"
              className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="inline-block bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded hover:bg-indigo-50"
            >
              Create Account
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;