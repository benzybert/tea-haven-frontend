import React from 'react';
import FeatureCard from './FeatureCard';
import { homeFeatures } from '../../constants/features';

const FeatureSection = () => (
  <div className="bg-white py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {homeFeatures.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  </div>
);

export default FeatureSection; 