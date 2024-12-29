// src/components/presentational/auth/LoginForm.jsx
import { useForm } from '../../../hooks/useForm';
import AuthLayout from '../../container/auth/AuthLayout';
import Input from '../forms/Input';
import Button from '../forms/Button';
import { Link, useNavigate } from 'react-router-dom';  
import { useAuth } from '../../../context/AuthContext'; 



const LoginForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm({
    email: '',
    password: ''
  });

  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    await login(formData);
    navigate('/');
  };

  return (
    <AuthLayout
      title="Sign in to your account"
      subtitle="Or"
      subtitleLink={
        <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
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
    </AuthLayout>
  );
};

export default LoginForm;