import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { handleAsyncOperation } from '../../../utils/errorHandling';
import Layout from '../../common/Layout';
import Form from '../../common/Form';

const ResetPasswordForm = () => {
  const { token } = useParams();
  const { resetPassword } = useAuth();

  const fields = [
    {
      name: 'password',
      type: 'password',
      label: 'New Password',
      required: true
    },
    {
      name: 'confirmPassword',
      type: 'password',
      label: 'Confirm Password',
      required: true
    }
  ];

  const handleSubmit = async (values) => {
    await handleAsyncOperation(
      async () => {
        await resetPassword(token, values.password);
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
      message="Please enter your new password."
    >
      <Form
        formType="passwordReset"
        fields={fields}
        onSubmit={handleSubmit}
        submitText="Reset Password"
      />
    </Layout>
  );
};

export default ResetPasswordForm; 