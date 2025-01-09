import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

const HeroSection = () => (
  <div className="relative min-h-[80vh] flex items-start justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/tea_back.webp")',
        filter: 'brightness(0.7)'
      }}
    />
    
    {/* Content */}
    <div className="relative text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" style={{ marginTop: '20vh' }}>
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
        <span className="block">Discover the Art of</span>
        <span className="block text-green-400">Fine Tea</span>
      </h1>
      <p className="text-xl sm:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed text-gray-200">
        Experience the world's finest teas, carefully curated for your perfect cup. 
        From traditional to exotic blends.
      </p>
      <div className="space-x-4">
        <Link 
          to={ROUTES.PRODUCTS} 
          className="inline-block bg-green-600 px-8 py-4 rounded-lg hover:bg-green-700 text-lg font-medium transition-colors duration-300"
        >
          Explore Collection
        </Link>
        <Link 
          to={ROUTES.ABOUT} 
          className="inline-block bg-white bg-opacity-20 backdrop-blur-sm px-8 py-4 rounded-lg hover:bg-opacity-30 text-lg font-medium transition-colors duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>

    {/* Decorative Elements */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
  </div>
);

export default HeroSection; 