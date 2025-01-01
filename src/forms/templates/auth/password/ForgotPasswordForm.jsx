import React from 'react';
import PropTypes from 'prop-types';
import AuthFormWrapper from '../../../wrappers/AuthFormWrapper';
import { forgotPasswordSchema } from '../../../validation/schemas';

const FORGOT_PASSWORD_FIELDS = [
  {
    name: 'email',
    label: 'Email address',
    type: 'email',
    autoComplete: 'email',
    isFirst: true,
    isLast: true
  }
];

const ForgotPasswordForm = ({ onSubmit }) => {
  return (
    <AuthFormWrapper
      title="Reset your password"
      message="Enter your email address and we'll send you a link to reset your password"
      schema={forgotPasswordSchema}
      onSubmit={onSubmit}
      submitText="Send reset link"
      fields={FORGOT_PASSWORD_FIELDS}
      successMessage="If an account exists with that email, we've sent you password reset instructions"
      links={[
        {
          prefix: 'Remember your password?',
          to: '/login',
          text: 'Sign in'
        }
      ]}
    />
  );
};

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default ForgotPasswordForm; 