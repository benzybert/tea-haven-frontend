import React from 'react';
import LoginForm from '../forms/templates/auth/LoginForm';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const { login } = useAuth();

  return <LoginForm onSubmit={login} />;
};

export default Login;
