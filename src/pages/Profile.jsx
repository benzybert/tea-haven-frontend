import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { handleAsyncOperation } from '../utils/errorHandling';
import { STYLES } from '../utils/styles';

import Layout from '../components/common/Layout';
import Button from '../components/forms/Button';
import ErrorMessage from '../components/common/ErrorMessage';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProfileActions from '../components/profile/ProfileActions';
import { PasswordChangeForm } from '../components/auth/password';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [error, setError] = useState(null);

  const handleLogout = async () => {
    await handleAsyncOperation(
      async () => {
        await logout();
        navigate('/');
      },
      {
        showError: true,
        onError: (err) => setError(err.message)
      }
    );
  };

  return (
    <Layout type="default">
      <div className={STYLES.card.container}>
        <div className={STYLES.card.body}>
          {error && <ErrorMessage message={error} variant="alert" />}
          
          <ProfileActions onLogout={handleLogout} />
          
          <div className={STYLES.spacing.section}>
            <ProfileInfo user={user} />

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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;