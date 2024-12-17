import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../common/LoadingSpinner';

const TeaProductCard = ({ tea }) => {
    const [isImageLoading, setIsImageLoading] = useState(true);
    const [isAddingToCart, setIsAddingToCart] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleAddToCart = async () => {
        try {
            setIsAddingToCart(true);
            // TODO: Implement cart functionality
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        } catch (error) {
            console.error('Error adding to cart:', error);
        } finally {
            setIsAddingToCart(false);
        }
    };

    return (
        <div className="border rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48">
                {isImageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <LoadingSpinner />
                    </div>
                )}
                <img
                    src={tea.image}
                    alt={tea.name}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => setIsImageLoading(false)}
                />
            </div>
            
            <div className="p-4">
                <Link to={`/product/${tea.id}`} className="hover:text-green-600">
                    <h3 className="text-xl font-semibold mb-2">{tea.name}</h3>
                </Link>
                <p className="text-gray-600 mb-4">{tea.description}</p>
                
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-xl font-bold">${tea.price}</span>
                        {tea.countInStock < 5 && tea.countInStock > 0 && (
                            <span className="text-sm text-orange-500 ml-2">Only {tea.countInStock} left!</span>
                        )}
                    </div>
                    
                    <button 
                        onClick={handleAddToCart}
                        disabled={isAddingToCart || tea.countInStock === 0}
                        className={`px-4 py-2 rounded ${tea.countInStock === 0
                            ? 'bg-gray-300 cursor-not-allowed'
                            : isAddingToCart
                            ? 'bg-green-400 cursor-wait'
                            : 'bg-green-600 hover:bg-green-700'
                        } text-white transition-colors duration-300`}
                    >
                        {tea.countInStock === 0
                            ? 'Out of Stock'
                            : isAddingToCart
                            ? 'Adding...'
                            : 'Add to Cart'
                        }
                    </button>
                </div>
            </div>
            
            {showToast && (
                <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded shadow-lg">
                    Added to cart successfully!
                </div>
            )}
        </div>
    );
};

export default TeaProductCard;