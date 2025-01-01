import React, { useState } from 'react';
import Button from '../forms/Button';
import { PasswordChangeForm } from '../auth/password';
import { STYLES } from '../../utils/styles';

const AccountSettings = () => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  return (
    <div>
      <h3 className={STYLES.text.subheading}>Account Settings</h3>
      {!showPasswordForm ? (
        <Button
          variant="secondary"
          onClick={() => setShowPasswordForm(true)}
          className="mt-4"
        >
          Change Password
        </Button>
      ) : (
        <PasswordChangeForm
          onSuccess={() => setShowPasswordForm(false)}
          onCancel={() => setShowPasswordForm(false)}
        />
      )}
    </div>
  );
};

export default AccountSettings; 