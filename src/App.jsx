import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

// Auth Components
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import ForgotPasswordForm from './components/auth/ForgotPasswordForm';
import ResetPasswordForm from './components/auth/ResetPasswordForm';
import ProtectedRoute from './components/routing/ProtectedRoute';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<LoginForm />} />
              <Route path="register" element={<RegisterForm />} />
              <Route path="forgot-password" element={<ForgotPasswordForm />} />
              <Route path="reset-password/:token" element={<ResetPasswordForm />} />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;