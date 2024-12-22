import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from '../components/common';

const NotFoundPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
        <Link to="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </Card>
    </div>
  );
};

export default NotFoundPage;