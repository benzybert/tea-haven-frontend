/**
 * Single Responsibility: Handles new user registration by collecting and validating
 * user details (name, email, password) and submitting them to the auth service.
 */
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useAuthNavigation } from '../../hooks/useAuthNavigation';
import Layout from '../common/Layout';
import Form from '../common/Form';

const RegisterForm = () => {
  const { register, isLoading } = useAuth();
  const { onRegisterSuccess } = useAuthNavigation();

  const fields = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Full Name',
      required: true
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email address',
      required: true
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      required: true
    },
    {
      name: 'passwordConfirm',
      type: 'password',
      placeholder: 'Confirm Password',
      required: true
    }
  ];

  const handleSubmit = async (formData) => {
    try {
      await register(formData);
      onRegisterSuccess();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout
      type="auth"
      title="Create a new account"
      subtitle="Or"
      subtitleLink={
        <Link 
          to="/login"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          sign in to your account
        </Link>
      }
    >
      <Form
        fields={fields}
        onSubmit={handleSubmit}
        submitText="Sign up"
        isLoading={isLoading}
      />
    </Layout>
  );
};

export default RegisterForm;