import React from 'react';
import { useAuth } from '../context/AuthContext';
import { ProductCatalog } from '../components/products';
import { LoadingSpinner } from '../components/common';

const HomePage = () => {
  const { isLoading } = useAuth();

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Welcome to Tea Haven</h1>
      <ProductCatalog />
    </div>
  );
};

export default HomePage;
