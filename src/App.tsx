import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './store/auth/AuthContext';
import { CartProvider } from './store/cart/CartContext';
import { Header, Footer } from './app/layout';
import AppRoutes from './app/routes';
import { ErrorBoundary } from './components/common';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <div className="min-h-screen flex flex-col bg-gray-50">
              <Header />
              <main className="flex-grow container mx-auto px-4 py-8">
                <AppRoutes />
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;