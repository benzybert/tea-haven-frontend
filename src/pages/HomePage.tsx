import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../features/auth/hooks/useAuth';
import { Card, Button } from '../components/common';

const HomePage: React.FC = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Welcome to Tea Haven</h1>
        
        {isAuthenticated ? (
          <div>
            <p className="text-lg mb-4">Hello, {user?.name}! Ready to explore our amazing tea collection?</p>
            <Link to="/profile">
              <Button variant="primary">View Profile</Button>
            </Link>
          </div>
        ) : (
          <div>
            <p className="text-lg mb-4">Discover the finest tea selections from around the world.</p>
            <div className="space-x-4">
              <Link to="/login">
                <Button variant="primary">Sign In</Button>
              </Link>
              <Link to="/register">
                <Button variant="outline">Create Account</Button>
              </Link>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default HomePage;