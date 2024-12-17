import React, { useState, useEffect } from 'react';
import { fetchAllTeas } from '../../../api/teaApi';

const ProductCatalog = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchAllTeas();
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(product => (
                <div key={product.id} className="border p-4 rounded shadow">
                    <h2 className="text-xl font-bold">{product.name}</h2>
                    <p>{product.description}</p>
                    <p className="text-lg font-semibold">${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductCatalog;