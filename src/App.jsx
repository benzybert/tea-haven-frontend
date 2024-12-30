import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Products from './pages/Products';

// Auth Components
import LoginForm from './components/presentational/auth/LoginForm';  
import RegisterForm from './components/presentational/auth/RegisterForm';
import ForgotPasswordForm from './components/presentational/auth/ForgotPasswordForm';
import ResetPasswordForm from './components/presentational/auth/ResetPasswordForm';
import ProtectedRoute from './components/container/routing/ProtectedRoute';

// Layout Components
import Header from './components/container/layout/Header';
import Footer from './components/container/layout/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';

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