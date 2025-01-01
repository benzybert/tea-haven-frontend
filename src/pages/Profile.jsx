import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { handleAsyncOperation } from '../utils/errorHandling';
import { STYLES } from '../utils/styles';

import Layout from '../components/common/Layout';
import ErrorMessage from '../components/common/ErrorMessage';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProfileActions from '../components/profile/ProfileActions';
import AccountSettings from '../components/profile/AccountSettings';

const useLogout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
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

  return { handleLogout, error };
};

const Profile = () => {
  const { user } = useAuth();
  const { handleLogout, error } = useLogout();

  return (
    <Layout type="default">
      <div className={STYLES.card.container}>
        <div className={STYLES.card.body}>
          {error && <ErrorMessage message={error} variant="alert" />}
          
          <ProfileActions onLogout={handleLogout} />
          
          <div className={STYLES.spacing.section}>
            <ProfileInfo user={user} />
            <AccountSettings />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;