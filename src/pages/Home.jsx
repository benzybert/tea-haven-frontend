// Home.js
import React from 'react';
import '../styles/Home.css';
import HeroSection from '../components/home/HeroSection';
import FeatureSection from '../components/home/FeatureSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
    </div>
  );
};

export default Home;