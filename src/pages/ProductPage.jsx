import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TeaProductCard from '../components/features/tea/TeaProductCard';
import './styles/ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

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

  const relatedProducts = [
    // Add related products data here
  ];

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, Math.min(99, value));
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    // Add to cart logic
    console.log(`Adding ${quantity} of ${product.title} to cart`);
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="product-container">
          {/* Image Gallery */}
          <div className="image-gallery">
            <img 
              src={product.images[selectedImage]} 
              alt={product.title} 
              className="main-image"
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
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
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
            <h1 className="product-title">{product.title}</h1>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <p className="product-description">{product.description}</p>

            <div className="quantity-selector">
              <span className="quantity-label">Quantity:</span>
              <div className="quantity-controls">
                <button 
                  className="quantity-button"
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
                  className="quantity-button"
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <button 
              className="button button-primary add-to-cart"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            {/* Product Details Tabs */}
            <div className="product-details">
              <div className="details-tabs">
                <div 
                  className={`tab ${activeTab === 'description' ? 'active' : ''}`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </div>
                <div 
                  className={`tab ${activeTab === 'ingredients' ? 'active' : ''}`}
                  onClick={() => setActiveTab('ingredients')}
                >
                  Ingredients
                </div>
                <div 
                  className={`tab ${activeTab === 'brewing' ? 'active' : ''}`}
                  onClick={() => setActiveTab('brewing')}
                >
                  Brewing Guide
                </div>
              </div>

              <div className="tab-content">
                {activeTab === 'description' && (
                  <div>
                    <p>Origin: {product.details.origin}</p>
                    <p>Caffeine Level: {product.details.caffeine}</p>
                  </div>
                )}
                {activeTab === 'ingredients' && (
                  <ul>
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                )}
                {activeTab === 'brewing' && (
                  <div>
                    <p>Steep Time: {product.details.steepTime}</p>
                    <p>Water Temperature: {product.details.temperature}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="reviews-section">
          <h2 className="section-title">Customer Reviews</h2>
          {product.reviews.map((review) => (
            <div key={review.id} className="review">
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

        {/* Related Products */}
        <div className="related-products">
          <h2 className="section-title">You May Also Like</h2>
          <div className="related-products-grid">
            {relatedProducts.map((product) => (
              <TeaProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
