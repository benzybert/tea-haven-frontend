import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">About Tea Haven</h1>
      <div className="prose prose-green max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Welcome to Tea Haven, your premier destination for the finest teas from around the world.
          We are passionate about bringing you exceptional tea experiences and sharing the rich
          culture and tradition of tea drinking.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Our carefully curated selection includes artisanal teas from renowned tea gardens,
          offering you the perfect cup for every moment of your day.
        </p>
      </div>
    </div>
  );
};

export default About;