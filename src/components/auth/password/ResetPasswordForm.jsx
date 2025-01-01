import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { useAuthNavigation } from '../../../hooks/useAuthNavigation';
import { handleAsyncOperation } from '../../../utils/errorHandling';
import Layout from '../../common/Layout';
import Form from '../../common/Form';
import { resetPasswordFormFields } from '../../../constants/formFields';

const ResetPasswordForm = () => {
  const { token } = useParams();
  const { resetPassword } = useAuth();
  const { onResetSuccess } = useAuthNavigation();

  const handleSubmit = async (values) => {
    await handleAsyncOperation(
      async () => {
        const response = await resetPassword(token, values.password);
        onResetSuccess();
        return response.message;
      },
      {
        showLoader: true,
        showError: true,
        validateForm: () => {
          if (values.password !== values.confirmPassword) {
            throw new Error('Passwords do not match');
          }
        }
      }
    );
  };

  return (
    <Layout 
      type="auth"
      title="Reset your password"
      message="Please enter and confirm your new password."
    >
      <Form
        formType="passwordReset"
        fields={resetPasswordFormFields}
        onSubmit={handleSubmit}
        submitText="Reset Password"
      />
    </Layout>
  );
};

export default ResetPasswordForm; 