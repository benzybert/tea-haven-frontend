import React from 'react';
import Button from '../forms/Button';
import { STYLES } from '../../utils/styles';

const ProfileActions = ({ onLogout }) => (
  <div className={STYLES.flex.between}>
    <h1 className={STYLES.text.heading}>Profile</h1>
    <Button
      variant="danger"
      onClick={onLogout}
      className="w-auto"
    >
      Logout
    </Button>
  </div>
);

export default ProfileActions; 