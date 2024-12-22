import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './store/auth/AuthContext';
import AppRoutes from './app/routes';
import { Header, Footer } from './app/layout';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;