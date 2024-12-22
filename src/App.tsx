import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './store/auth/AuthContext';
import { CartProvider } from './store/cart/CartContext';
import { Header, Footer } from './app/layout';
import AppRoutes from './app/routes';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <AppRoutes />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;