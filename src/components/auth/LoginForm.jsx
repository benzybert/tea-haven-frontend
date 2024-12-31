// src/components/presentational/auth/LoginForm.jsx
import { Link } from 'react-router-dom';  
import { useForm } from '../../hooks/useForm';
import { useAuth } from '../../context/AuthContext'; 
import { useAuthNavigation } from '../../hooks/useAuthNavigation';

// Common Components
import Layout from '../common/Layout';
import Input from '../forms/Input';
import Button from '../forms/Button';

const LoginForm = () => {
  const { values, handleChange, handleSubmit } = useForm({
    email: '',
    password: ''
  });

  const { login, isLoading } = useAuth();
  const { onLoginSuccess, goToRegister } = useAuthNavigation();

  const onSubmit = async (formData) => {
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
          onClick={goToRegister} 
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          create a new account
        </Link>
      }
    >
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-md shadow-sm -space-y-px">
          <Input
            id="email"
            name="email"
            type="email"
            label="Email address"
            placeholder="Email address"
            value={values.email}
            onChange={handleChange}
            isFirst
          />
          <Input
            id="password"
            name="password"
            type="password"
            label="Password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            isLast
          />
        </div>
        <Button type="submit" disabled={isLoading}>
          Sign in
        </Button>
      </form>
    </Layout>
  );
};

export default LoginForm;