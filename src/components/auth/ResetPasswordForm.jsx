import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Button, Input, Card } from '../common';

const ResetPasswordForm = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const { resetPassword, isLoading, error } = useAuth();

  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });

  const [validationError, setValidationError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setValidationError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!token) {
      setValidationError('Invalid reset token');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setValidationError('Passwords do not match');
      return;
    }

    if (formData.password.length < 8) {
      setValidationError('Password must be at least 8 characters long');
      return;
    }

    try {
      await resetPassword({ ...formData, token });
      navigate('/login', { 
        state: { message: 'Password reset successful. Please log in with your new password.' } 
      });
    } catch (err) {
      // Error is handled by the auth context
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Reset Password</h1>

      {(error || validationError) && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error || validationError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="New Password"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={8}
          helperText="Password must be at least 8 characters long"
        />

        <Input
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          minLength={8}
        />

        <Button
          type="submit"
          variant="primary"
          isLoading={isLoading}
          className="w-full"
        >
          Reset Password
        </Button>
      </form>
    </Card>
  );
};

export default ResetPasswordForm;