import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <div className="hero-section flex items-center justify-center">
    <div className="text-center text-white p-4">
      <h1 className="text-6xl font-bold mb-6">TeaHaven</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Experience the world's finest teas, carefully curated for your perfect cup
      </p>
      <Link 
        to="/products" 
        className="bg-green-600 px-8 py-4 rounded-lg hover:bg-green-700 text-lg"
      >
        Explore Collection
      </Link>
    </div>
  </div>
);

export default HeroSection; 