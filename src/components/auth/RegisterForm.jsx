import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useAuthNavigation } from '../../hooks/useAuthNavigation';
import Layout from '../common/Layout';
import Input from '../forms/Input';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const { register, isLoading } = useAuth();
  const { onRegisterSuccess, goToLogin } = useAuthNavigation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      onRegisterSuccess();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout
      type="auth"
      title="Create a new account"
      subtitle="Or"
      subtitleLink={
        <Link 
          onClick={goToLogin}
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          sign in to your account
        </Link>
      }
    >
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm -space-y-px">
          <Input
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            isFirst
          />
          <Input
            name="email"
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <Input
            name="passwordConfirm"
            type="password"
            placeholder="Confirm Password"
            value={formData.passwordConfirm}
            onChange={(e) => setFormData({ ...formData, passwordConfirm: e.target.value })}
          />
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign up
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default RegisterForm;