import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import AppRoutes from './routes';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Layout>
            <AppRoutes />
          </Layout>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
