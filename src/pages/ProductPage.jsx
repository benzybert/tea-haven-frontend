import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import TeaProductCard from '../components/features/tea/TeaProductCard';
import './styles/ProductPage.css';
import '../styles/animations.css';

const ProductPage = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isAdding, setIsAdding] = useState(false);

  // This would come from your API/state management
  const product = {
    id: 1,
    title: 'Premium Earl Grey Tea',
    price: 24.99,
    description: 'Our finest Earl Grey blend, featuring high-quality black tea leaves scented with natural bergamot oil. Perfect for afternoon tea.',
    images: [
      '/images/earl-grey-1.jpg',
      '/images/earl-grey-2.jpg',
      '/images/earl-grey-3.jpg',
    ],
    details: {
      origin: 'Ceylon, Sri Lanka',
      caffeine: 'Medium',
      steepTime: '3-5 minutes',
      temperature: '96°C',
    },
    ingredients: ['Black tea leaves', 'Natural bergamot oil', 'Blue cornflower petals'],
    reviews: [
      {
        id: 1,
        author: 'Jane D.',
        date: '2023-12-10',
        rating: 5,
        comment: 'The best Earl Grey I\'ve ever tasted. The bergamot flavor is perfectly balanced.'
      },
      {
        id: 2,
        author: 'Michael S.',
        date: '2023-12-08',
        rating: 4,
        comment: 'Very good quality tea. Would definitely buy again.'
      }
    ]
  };

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, Math.min(99, value));
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem(product, quantity);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="product-page animate-fadeIn">
      <div className="container">
        <div className="product-container stagger-children">
          {/* Image Gallery */}
          <div className="image-gallery">
            <img 
              src={product.images[selectedImage]} 
              alt={product.title} 
              className="main-image animate-scaleIn"
              onError={(e) => {
                e.target.src = '/images/tea-placeholder.jpg';
              }}
            />
            <div className="thumbnails">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.title} view ${index + 1}`}
                  className={`thumbnail hover-scale ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                  onError={(e) => {
                    e.target.src = '/images/tea-placeholder.jpg';
                  }}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <h1 className="product-title animate-slideInRight">{product.title}</h1>
            <p className="product-price animate-slideInRight">${product.price.toFixed(2)}</p>
            <p className="product-description animate-slideInRight">{product.description}</p>

            <div className="quantity-selector animate-slideInRight">
              <span className="quantity-label">Quantity:</span>
              <div className="quantity-controls">
                <button 
                  className="quantity-button button-press"
                  onClick={() => handleQuantityChange(quantity - 1)}
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  max="99"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                  className="quantity-input"
                />
                <button 
                  className="quantity-button button-press"
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <button 
              className={`button button-primary add-to-cart button-press ${isAdding ? 'animate-bounce' : ''}`}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            {/* Product Details Tabs */}
            <div className="product-details animate-slideInUp">
              <div className="details-tabs">
                {['description', 'ingredients', 'brewing'].map((tab) => (
                  <div 
                    key={tab}
                    className={`tab hover-lift ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </div>
                ))}
              </div>

              <div className="tab-content animate-fadeIn">
                {activeTab === 'description' && (
                  <div>
                    <p>Origin: {product.details.origin}</p>
                    <p>Caffeine Level: {product.details.caffeine}</p>
                  </div>
                )}
                {activeTab === 'ingredients' && (
                  <ul className="stagger-children">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                )}
                {activeTab === 'brewing' && (
                  <div className="stagger-children">
                    <p>Steep Time: {product.details.steepTime}</p>
                    <p>Water Temperature: {product.details.temperature}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="reviews-section animate-slideInUp">
          <h2 className="section-title">Customer Reviews</h2>
          <div className="stagger-children">
            {product.reviews.map((review) => (
              <div key={review.id} className="review hover-lift">
                <div className="review-header">
                  <span className="review-author">{review.author}</span>
                  <span className="review-date">{review.date}</span>
                </div>
                <div className="review-rating">
                  {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                </div>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="related-products animate-slideInUp">
          <h2 className="section-title">You May Also Like</h2>
          <div className="related-products-grid stagger-children">
            {/* Add related products here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
