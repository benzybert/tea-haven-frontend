import React from 'react';
import PropTypes from 'prop-types';
import AuthFormWrapper from '../../../wrappers/AuthFormWrapper';
import { resetPasswordSchema } from '../../../validation/schemas';

const RESET_PASSWORD_FIELDS = [
  {
    name: 'password',
    label: 'New Password',
    type: 'password',
    autoComplete: 'new-password',
    isFirst: true
  },
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    type: 'password',
    autoComplete: 'new-password',
    isLast: true
  }
];

const ResetPasswordForm = ({ onSubmit }) => {
  return (
    <AuthFormWrapper
      title="Set new password"
      message="Please choose a new password for your account"
      schema={resetPasswordSchema}
      onSubmit={onSubmit}
      submitText="Reset password"
      fields={RESET_PASSWORD_FIELDS}
      successMessage="Your password has been reset successfully"
      successRedirect="/login"
    />
  );
};

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default ResetPasswordForm; 