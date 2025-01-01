import React, { useState } from 'react';
import Button from '../common/Button';
import PasswordChangeForm from '../../forms/templates/auth/password/PasswordChangeForm';
import { useAuth } from '../../hooks/useAuth';

const AccountSettings = () => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const { changePassword } = useAuth();

  return (
    <div className="space-y-6">
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