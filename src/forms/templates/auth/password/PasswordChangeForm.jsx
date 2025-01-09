import React from 'react';
import PropTypes from 'prop-types';
import AuthFormWrapper from '../../../wrappers/AuthFormWrapper';
import { changePasswordSchema } from '../../../validation/schemas';

const PASSWORD_CHANGE_FIELDS = [
  {
    name: 'currentPassword',
    label: 'Current Password',
    type: 'password',
    autoComplete: 'current-password',
    isFirst: true
  },
  {
    name: 'newPassword',
    label: 'New Password',
    type: 'password',
    autoComplete: 'new-password'
  },
  {
    name: 'confirmPassword',
    label: 'Confirm New Password',
    type: 'password',
    autoComplete: 'new-password',
    isLast: true
  }
];

const PasswordChangeForm = ({ onSubmit, onCancel }) => {
  return (
    <div className="space-y-6">
      <AuthFormWrapper
        title="Change Password"
        message="Please enter your current password and choose a new one"
        schema={changePasswordSchema}
        onSubmit={onSubmit}
        submitText="Change Password"
        fields={PASSWORD_CHANGE_FIELDS}
        successMessage="Your password has been changed successfully"
      />
      {onCancel && (
        <button
          type="button"
          onClick={onCancel}
          className="mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Cancel
        </button>
      )}
    </div>
  );
};

PasswordChangeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func
};

export default PasswordChangeForm; 