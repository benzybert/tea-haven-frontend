import React from 'react';
import FooterAbout from './footer/FooterAbout.jsx';
import FooterLinks from './footer/FooterLinks.jsx';
import FooterContact from './footer/FooterContact.jsx';

const Footer = () => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FooterAbout />
        <FooterLinks />
        <FooterContact />
      </div>
      
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
        <p>&copy; {new Date().getFullYear()} Tea Haven. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;