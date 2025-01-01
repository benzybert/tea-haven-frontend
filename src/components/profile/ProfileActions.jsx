import React from 'react';
import Button from '../common/Button';

const ProfileActions = () => {
  return (
    <div className="space-y-4">
      <Button variant="secondary">Edit Profile</Button>
      <Button variant="danger">Delete Account</Button>
    </div>
  );
};

export default ProfileActions; 