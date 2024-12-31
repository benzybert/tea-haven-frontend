/**
 * Single Responsibility: Handles password reset requests by collecting the user's email
 * and initiating the password reset process through the auth service.
 */
import { useAuth } from '../../context/AuthContext';
import AuthFormLayout from './AuthFormLayout';
import Form from '../common/Form';

const ForgotPasswordForm = () => {
  const { forgotPassword, isLoading } = useAuth();

  const fields = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email address',
      required: true
    }
  ];

  const handleSubmit = async (formData) => {
    try {
      const response = await forgotPassword(formData.email);
      return response.message;
    } catch (error) {
      throw error.response?.data?.message || 'An error occurred';
    }
  };

  return (
    <AuthFormLayout 
      title="Reset your password"
    >
      <Form
        fields={fields}
        onSubmit={handleSubmit}
        submitText="Send reset link"
        isLoading={isLoading}
      />
    </AuthFormLayout>
  );
};

export default ForgotPasswordForm;