/**
 * Single Responsibility: Handles new user registration by collecting and validating
 * user details (name, email, password) and submitting them to the auth service.
 */
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useAuthNavigation } from '../../hooks/useAuthNavigation';
import Layout from '../common/Layout';
import Form from '../common/Form';
import { registerFormFields } from '../../constants/formFields';
import { useFormSubmit } from '../../hooks/useFormSubmit';
import { ROUTES } from '../../constants/routes';

const RegisterForm = () => {
  const { register, isLoading } = useAuth();
  const { onRegisterSuccess } = useAuthNavigation();
  const handleSubmit = useFormSubmit(register, onRegisterSuccess);

  return (
    <Layout
      type="auth"
      title="Create a new account"
      subtitle="Or"
      subtitleLink={
        <Link 
          to={ROUTES.LOGIN}
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          sign in to your account
        </Link>
      }
    >
      <Form
        fields={registerFormFields}
        onSubmit={handleSubmit}
        submitText="Sign up"
        isLoading={isLoading}
      />
    </Layout>
  );
};

export default RegisterForm;