// Home.js
import React from 'react';
import './styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      title: "Premium Quality",
      description: "Hand-picked teas from finest estates"
    },
    {
      title: "Global Selection",
      description: "Teas from China, Japan, India and more"
    },
    {
      title: "Expert Curated",
      description: "Selected by certified tea sommeliers"
    }
  ];

  return (
    <div>
      <div className="hero-section flex items-center justify-center">
        <div className="text-center text-white p-4">
          <h1 className="text-6xl font-bold mb-6">TeaHaven</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Experience the world's finest teas, carefully curated for your perfect cup</p>
          <Link to="/products" className="bg-green-600 px-8 py-4 rounded-lg hover:bg-green-700 text-lg">
            Explore Collection
          </Link>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;