import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import FormInput from '../components/FormInput';

const AuthFormLayout = ({ title, message, subtitle, subtitleLink, children }) => (
  <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {title}
        </h2>
        {message && (
          <p className="mt-2 text-center text-sm text-gray-600">
            {message}
            {subtitle && ' '}
            {subtitleLink}
          </p>
        )}
      </div>
      {children}
    </div>
  </div>
);

const AuthFormWrapper = ({
  title,
  message,
  schema,
  onSubmit,
  submitText,
  fields,
  links,
  successTitle,
  successMessage,
  successRedirect,
  children
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    setIsLoading(true);
    try {
      await onSubmit(data);
      if (successRedirect) {
        navigate(successRedirect, {
          state: { message: successMessage }
        });
      } else if (successMessage) {
        setIsSuccess(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess && successMessage) {
    return (
      <AuthFormLayout
        title={successTitle || 'Success'}
        message={successMessage}
      >
        <Link
          to="/login"
          className="block text-center text-indigo-600 hover:text-indigo-500"
        >
          Back to login
        </Link>
      </AuthFormLayout>
    );
  }

  return (
    <AuthFormLayout
      title={title}
      message={message}
      subtitle={links?.[0]?.prefix}
      subtitleLink={
        links?.[0] && (
          <Link
            to={links[0].to}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            {links[0].text}
          </Link>
        )
      }
    >
      <Form
        onSubmit={handleSubmit}
        schema={schema}
        submitText={submitText}
        isLoading={isLoading}
      >
        {fields?.map((field) => (
          <FormInput
            key={field.name}
            {...field}
          />
        ))}
        {children}
      </Form>
    </AuthFormLayout>
  );
};

AuthFormLayout.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleLink: PropTypes.node,
  children: PropTypes.node
};

AuthFormWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
  schema: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.object),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      prefix: PropTypes.string
    })
  ),
  successTitle: PropTypes.string,
  successMessage: PropTypes.string,
  successRedirect: PropTypes.string,
  children: PropTypes.node
};

export default AuthFormWrapper; 