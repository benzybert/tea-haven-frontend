import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button, Input, Card } from '../common';

const ForgotPasswordForm = () => {
  const { forgotPassword, isLoading, error } = useAuth();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      setSubmitted(true);
    } catch (err) {
      // Error is handled by the auth context
    }
  };

  if (submitted) {
    return (
      <Card className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Check Your Email
        </h2>
        <p className="text-gray-600 mb-6">
          We've sent password reset instructions to your email address.
        </p>
        <Link
          to="/login"
          className="text-green-600 hover:text-green-500 font-medium"
        >
          Back to login
        </Link>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Reset Password</h1>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email Address"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Button
          type="submit"
          variant="primary"
          isLoading={isLoading}
          className="w-full"
        >
          Send Reset Instructions
        </Button>
      </form>

      <div className="mt-6 text-center">
        <Link
          to="/login"
          className="text-green-600 hover:text-green-500 font-medium"
        >
          Back to login
        </Link>
      </div>
    </Card>
  );
};

export default ForgotPasswordForm;