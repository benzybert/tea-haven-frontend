// Home.js
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeatureSection from '../components/home/FeatureSection';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;