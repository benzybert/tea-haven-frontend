/**
 * Single Responsibility: Handles user authentication by collecting credentials (email, password)
 * and managing the login process through the auth service.
 */
// src/components/presentational/auth/LoginForm.jsx
import { Link } from 'react-router-dom';  
import { useForm } from '../../hooks/useForm';
import { useAuth } from '../../context/AuthContext'; 
import { useAuthNavigation } from '../../hooks/useAuthNavigation';

// Common Components
import Layout from '../common/Layout';
import Input from '../forms/Input';
import Button from '../forms/Button';
import Form from '../common/Form';

const LoginForm = () => {
  const { login, isLoading } = useAuth();
  const { onLoginSuccess } = useAuthNavigation();

  const fields = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email address',
      required: true
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      required: true
    }
  ];

  const handleSubmit = async (formData) => {
    await login(formData);
    onLoginSuccess();
  };

  return (
    <Layout
      type="auth"
      title="Sign in to your account"
      subtitle="Or"
      subtitleLink={
        <Link 
          to="/register" 
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          create a new account
        </Link>
      }
    >
      <Form
        fields={fields}
        onSubmit={handleSubmit}
        submitText="Sign in"
        isLoading={isLoading}
      />
    </Layout>
  );
};

export default LoginForm;