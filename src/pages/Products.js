import React from 'react';
import ProductCatalog from '../components/features/tea/ProductCatalog';

const Products = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Our Tea Collection</h1>
            <ProductCatalog />
        </div>
    );
};

export default Products;