import React from 'react';
import PropTypes from 'prop-types';
import AuthFormWrapper from '../../wrappers/AuthFormWrapper';
import { loginSchema } from '../../validation/schemas';

const LOGIN_FIELDS = [
  {
    name: 'email',
    label: 'Email address',
    type: 'email',
    autoComplete: 'email',
    isFirst: true
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    autoComplete: 'current-password',
    isLast: true
  }
];

const LoginForm = ({ onSubmit }) => {
  return (
    <AuthFormWrapper
      title="Sign in to your account"
      message="Welcome back!"
      schema={loginSchema}
      onSubmit={onSubmit}
      submitText="Sign in"
      fields={LOGIN_FIELDS}
      links={[
        {
          prefix: "Don't have an account?",
          to: '/register',
          text: 'Sign up'
        }
      ]}
    />
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default LoginForm; 