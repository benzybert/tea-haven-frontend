import React from 'react';
import ProductCatalog from '../components/features/tea/ProductCatalog';

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Welcome to Tea Haven</h1>
            <ProductCatalog />
        </div>
    );
};

export default Home;