import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './styles/Home.css';
import '../styles/animations.css';

const Home = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [featuresRef, featuresVisible] = useScrollAnimation(0.2);

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
      <div 
        ref={heroRef} 
        className={`hero-section ${heroVisible ? 'animate-fadeIn' : ''}`}
      >
        <div className="hero-content">
          <h1 className={`hero-title ${heroVisible ? 'animate-slideInUp' : ''}`}>
            TeaHaven
          </h1>
          <p className={`hero-description ${heroVisible ? 'animate-slideInUp' : ''}`}>
            Experience the world's finest teas, carefully curated for your perfect cup
          </p>
          <Link 
            to="/products" 
            className={`hero-button ${heroVisible ? 'animate-scaleIn' : ''}`}
          >
            Explore Collection
          </Link>
        </div>
      </div>

      <div 
        ref={featuresRef} 
        className={`features-section ${featuresVisible ? 'animate-fadeIn' : ''}`}
      >
        <div className="container">
          <h2 className={`features-title ${featuresVisible ? 'animate-slideInUp' : ''}`}>
            Why Choose Us
          </h2>
          <div className="features-grid stagger-children">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`feature-card hover-lift ${featuresVisible ? 'animate-slideInUp' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
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
