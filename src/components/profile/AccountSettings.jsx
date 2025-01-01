import React, { useState } from 'react';
import Button from '../common/Button';
import PasswordChangeForm from '../../forms/templates/auth/password/PasswordChangeForm';
import { useAuth } from '../../hooks/useAuth';

const AccountSettings = () => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const { changePassword } = useAuth();

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900">Account Settings</h3>
      {!showPasswordForm ? (
        <Button
          variant="secondary"
          onClick={() => setShowPasswordForm(true)}
        >
          Change Password
        </Button>
      ) : (
        <PasswordChangeForm
          onSubmit={changePassword}
          onCancel={() => setShowPasswordForm(false)}
        />
      )}
    </div>
  );
};

export default AccountSettings; 