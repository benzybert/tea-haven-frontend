/**
 * Single Responsibility: Handles the final step of password reset by collecting and validating
 * the new password, using the reset token from URL params to complete the reset process.
 */
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useAuthNavigation } from '../../hooks/useAuthNavigation';
import AuthFormLayout from './AuthFormLayout';
import Form from '../common/Form';

const ResetPasswordForm = () => {
  const { token } = useParams();
  const { resetPassword, isLoading } = useAuth();
  const { onResetSuccess } = useAuthNavigation();

  const fields = [
    {
      name: 'password',
      type: 'password',
      placeholder: 'New password',
      required: true
    },
    {
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm new password',
      required: true
    }
  ];

  const handleSubmit = async (formData) => {
    if (formData.password !== formData.confirmPassword) {
      throw new Error('Passwords do not match');
    }

    try {
      const response = await resetPassword(token, formData.password);
      onResetSuccess();
      return response.message;
    } catch (error) {
      throw error.response?.data?.message || 'An error occurred';
    }
  };

  return (
    <AuthFormLayout title="Reset your password">
      <Form
        fields={fields}
        onSubmit={handleSubmit}
        submitText="Reset Password"
        isLoading={isLoading}
      />
    </AuthFormLayout>
  );
};

export default ResetPasswordForm;