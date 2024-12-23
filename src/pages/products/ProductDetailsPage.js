import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { teaService } from '../../services/tea.service';
import { useCart } from '../../context/CartContext';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await teaService.getTeaById(id);
        setProduct(response.data);
      } catch (err) {
        setError(err.message || 'Failed to fetch product details');
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= (product?.stock || 0)) {
      setQuantity(value);
    }
  };

  const handleAddToCart = async () => {
    try {
      await addToCart(product.id, quantity);
      navigate('/cart');
    } catch (err) {
      console.error('Failed to add to cart:', err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={product.image || '/placeholder-tea.jpg'}
            alt={product.name}
            className="w-full h-full object-center object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <div className="mt-4">
            <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">Description</h3>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>

          {product.stock > 0 ? (
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <label htmlFor="quantity" className="mr-4 text-gray-700">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  max={product.stock}
                  className="w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add to Cart
              </button>
            </div>
          ) : (
            <div className="mt-8">
              <span className="text-red-600 font-medium">Out of Stock</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
