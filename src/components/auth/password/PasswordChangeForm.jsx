import React from 'react';
import { useForm } from '../../../hooks/useForm';
import { FORM_SCHEMAS } from '../../../utils/validation';
import { handleAsyncOperation } from '../../../utils/errorHandling';
import { authService } from '../../../services/auth';
import Form from '../../common/Form';
import Button from '../../forms/Button';

const PasswordChangeForm = ({ onSuccess, onCancel }) => {
  const fields = [
    {
      name: 'currentPassword',
      type: 'password',
      label: 'Current Password',
      required: true
    },
    {
      name: 'newPassword',
      type: 'password',
      label: 'New Password',
      required: true
    },
    {
      name: 'confirmPassword',
      type: 'password',
      label: 'Confirm New Password',
      required: true
    }
  ];

  const handleSubmit = async (values) => {
    await handleAsyncOperation(
      async () => {
        await authService.changePassword({
          currentPassword: values.currentPassword,
          newPassword: values.newPassword
        });
        onSuccess();
      },
      {
        showLoader: true,
        showError: true
      }
    );
  };

  return (
    <div className="mt-4">
      <Form
        formType="passwordChange"
        fields={fields}
        onSubmit={handleSubmit}
        submitText="Update Password"
      />
      <Button
        variant="secondary"
        onClick={onCancel}
        className="mt-4"
      >
        Cancel
      </Button>
    </div>
  );
};

export default PasswordChangeForm; 