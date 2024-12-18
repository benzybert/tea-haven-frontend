import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';

const Home = () => {
  const features = [
    {
      title: 'Premium Quality',
      description: 'Hand-picked teas from finest estates'
    },
    {
      title: 'Global Selection',
      description: 'Teas from China, Japan, India and more'
    },
    {
      title: 'Expert Curated',
      description: 'Selected by certified tea sommeliers'
    }
  ];

  return (
    <div>
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">TeaHaven</h1>
          <p className="hero-description">
            Experience the world's finest teas, carefully curated for your perfect cup
          </p>
          <Link to="/products" className="hero-button">
            Explore Collection
          </Link>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <h2 className="features-title">Why Choose Us</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
