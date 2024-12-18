import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './styles/Navbar.css';
import '../../styles/animations.css';

const Navbar = () => {
  const { itemCount } = useCart();
  const location = useLocation();
  const [prevCount, setPrevCount] = useState(itemCount);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartBounce, setCartBounce] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle cart count animation
  useEffect(() => {
    if (itemCount > prevCount) {
      setCartBounce(true);
      setTimeout(() => setCartBounce(false), 300);
    }
    setPrevCount(itemCount);
  }, [itemCount, prevCount]);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container animate-fadeIn">
        <Link to="/" className="navbar-logo hover-lift">
          TeaHaven
        </Link>
        
        <div className="navbar-links stagger-children">
          <Link 
            to="/" 
            className={`navbar-link hover-lift ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={`navbar-link hover-lift ${location.pathname === '/products' ? 'active' : ''}`}
          >
            Products
          </Link>
          <Link 
            to="/about" 
            className={`navbar-link hover-lift ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/cart" 
            className={`navbar-link cart-icon hover-lift ${cartBounce ? 'animate-bounce' : ''}`}
          >
            Cart
            {itemCount > 0 && (
              <span className="cart-count animate-scaleIn">{itemCount}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
