// src/components/container/layout/Header.jsx
import React, { memo } from 'react';
import { useAuth } from '../../../context/AuthContext';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = memo(() => {
  const { isAuthenticated, user } = useAuth();

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo />
          <Navigation isAuthenticated={isAuthenticated} user={user} />
        </div>
      </nav>
    </header>
  );
});

export default Header;