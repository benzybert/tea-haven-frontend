import React from 'react';
import PropTypes from 'prop-types';
import AuthFormWrapper from '../../wrappers/AuthFormWrapper';
import { registerSchema } from '../../validation/schemas';

const REGISTER_FIELDS = [
  {
    name: 'name',
    label: 'Full name',
    type: 'text',
    autoComplete: 'name',
    isFirst: true
  },
  {
    name: 'email',
    label: 'Email address',
    type: 'email',
    autoComplete: 'email'
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    autoComplete: 'new-password'
  },
  {
    name: 'passwordConfirm',
    label: 'Confirm password',
    type: 'password',
    autoComplete: 'new-password',
    isLast: true
  }
];

const RegisterForm = ({ onSubmit }) => {
  return (
    <AuthFormWrapper
      title="Create your account"
      message="Start your tea journey today"
      schema={registerSchema}
      onSubmit={onSubmit}
      submitText="Sign up"
      fields={REGISTER_FIELDS}
      links={[
        {
          prefix: 'Already have an account?',
          to: '/login',
          text: 'Sign in'
        }
      ]}
    />
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default RegisterForm; 