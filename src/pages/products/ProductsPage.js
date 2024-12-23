import React from 'react';
import { ProductCatalog } from '../../components/products';

const ProductsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Tea Collection</h1>
      <ProductCatalog />
    </div>
  );
};

export default ProductsPage;
