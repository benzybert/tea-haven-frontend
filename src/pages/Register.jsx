import React from 'react';
import RegisterForm from '../forms/templates/auth/RegisterForm';
import { useAuth } from '../hooks/useAuth';

const Register = () => {
  const { register } = useAuth();

  return <RegisterForm onSubmit={register} />;
};

export default Register;
