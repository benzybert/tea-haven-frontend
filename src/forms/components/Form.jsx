import React from 'react';
import PropTypes from 'prop-types';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const Form = ({
  onSubmit,
  schema,
  children,
  submitText = 'Submit',
  isLoading = false,
  defaultValues = {}
}) => {
  const methods = useForm({
    resolver: schema ? yupResolver(schema) : undefined,
    defaultValues
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        {children}
        <button
          type="submit"
          disabled={isLoading}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {isLoading ? 'Loading...' : submitText}
        </button>
      </form>
    </FormProvider>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  schema: PropTypes.object,
  children: PropTypes.node,
  submitText: PropTypes.string,
  isLoading: PropTypes.bool,
  defaultValues: PropTypes.object
};

export default Form; 