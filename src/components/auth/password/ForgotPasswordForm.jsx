import React from 'react';
import { useAuth } from '../../../context/AuthContext';
import { handleAsyncOperation } from '../../../utils/errorHandling';
import Layout from '../../common/Layout';
import Form from '../../common/Form';

const ForgotPasswordForm = () => {
  const { forgotPassword } = useAuth();

  const fields = [
    {
      name: 'email',
      type: 'email',
      label: 'Email address',
      placeholder: 'Enter your email',
      required: true
    }
  ];

  const handleSubmit = async (values) => {
    await handleAsyncOperation(
      async () => {
        const response = await forgotPassword(values.email);
        return response.message;
      },
      {
        showLoader: true,
        showError: true
      }
    );
  };

  return (
    <Layout 
      type="auth"
      title="Reset your password"
      message="Enter your email address and we'll send you a link to reset your password."
    >
      <Form
        formType="passwordReset"
        fields={fields}
        onSubmit={handleSubmit}
        submitText="Send reset link"
      />
    </Layout>
  );
};

export default ForgotPasswordForm; 