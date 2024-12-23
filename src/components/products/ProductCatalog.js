import React, { useState, useEffect } from 'react';
import { teaService } from '../../services/tea.service';
import TeaList from './TeaList';
import { useCart } from '../../context/CartContext';

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let response;
        if (selectedCategory === 'all') {
          response = await teaService.getAllTeas();
        } else {
          response = await teaService.getTeasByType(selectedCategory);
        }
        setProducts(response.data.products);
      } catch (err) {
        setError(err.message || 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = async (productId) => {
    try {
      await addToCart(productId, 1);
    } catch (err) {
      console.error('Failed to add to cart:', err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Our Teas</h2>
        <div className="flex gap-4">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-4 py-2 rounded-md ${selectedCategory === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
          >
            All
          </button>
          <button
            onClick={() => handleCategoryChange('black')}
            className={`px-4 py-2 rounded-md ${selectedCategory === 'black' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
          >
            Black Tea
          </button>
          <button
            onClick={() => handleCategoryChange('green')}
            className={`px-4 py-2 rounded-md ${selectedCategory === 'green' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
          >
            Green Tea
          </button>
          <button
            onClick={() => handleCategoryChange('herbal')}
            className={`px-4 py-2 rounded-md ${selectedCategory === 'herbal' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
          >
            Herbal Tea
          </button>
        </div>
      </div>

      <TeaList products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default ProductCatalog;
