import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

// Auth Components
import LoginForm from './components/presentational/auth/LoginForm';  // Fix path
import RegisterForm from './components/presentational/auth/RegisterForm';
import ForgotPasswordForm from './components/presentational/auth/ForgotPasswordForm';
import ResetPasswordForm from './components/presentational/auth/ResetPasswordForm';
import ProtectedRoute from './components/container/routing/ProtectedRoute';

// Layout Components
import Header from './components/container/layout/Header';
import Footer from './components/container/layout/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/forgot-password" element={<ForgotPasswordForm />} />
                <Route path="/reset-password/:token" element={<ResetPasswordForm />} />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } />
                {/* Add a catch-all route for 404 */}
                <Route path="*" element={<div>404 Not Found</div>} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;