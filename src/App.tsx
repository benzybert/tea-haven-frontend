import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { Layout } from './components/layout';
import router from './routes';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
