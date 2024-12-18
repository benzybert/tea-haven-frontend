import React from 'react';
import TeaList from '../components/features/tea/TeaList';
import './styles/Products.css';

const Products = () => {
    return (
        <div className="products-container">
            <h1 className="products-title">Our Tea Collection</h1>
            <TeaList />
        </div>
    );
};

export default Products;
