import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import { 
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage 
} from './pages/auth';
import ProfilePage from './pages/ProfilePage';
import {
  ProductsPage,
  ProductDetailsPage 
} from './pages/products';
import {
  CartPage,
  CheckoutPage 
} from './pages/cart';

// Components
import { ProtectedRoute } from './components/routing';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      
      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
      
      {/* Protected Routes */}
      <Route path="/profile" element={
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>
      } />
      
      <Route path="/checkout" element={
        <ProtectedRoute>
          <CheckoutPage />
        </ProtectedRoute>
      } />
      
      {/* Product Routes */}
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      
      {/* Cart Routes */}
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default AppRoutes;
