import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

// Auth Components

// Layout Components
import Header from './components/container/layout/Header';
import Footer from './components/container/layout/Footer';

// Routing components
import AppRoutes from './components/routing/AppRoutes';

function App() {
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
}

export default App;