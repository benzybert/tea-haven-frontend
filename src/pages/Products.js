import React from 'react';
import TeaList from '../components/features/tea/TeaList';

const Products = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center my-8">Our Tea Collection</h1>
            <TeaList />
        </div>
    );
};

export default Products;
