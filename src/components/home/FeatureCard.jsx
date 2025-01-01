import React from 'react';

const FeatureCard = ({ title, description }) => (
  <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default FeatureCard; 