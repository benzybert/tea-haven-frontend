import React from 'react';
import { handleAsyncOperation } from '../../../utils/errorHandling';
import { authService } from '../../../services/auth';
import Form from '../../common/Form';
import Button from '../../forms/Button';
import { changePasswordFormFields } from '../../../constants/formFields';

const PasswordChangeForm = ({ onSuccess, onCancel }) => {
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
        fields={changePasswordFormFields}
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