import React from 'react';
import { STYLES } from '../../utils/styles';

const ProfileInfo = ({ user }) => (
  <div>
    <h3 className={STYLES.text.subheading}>Account Information</h3>
    <div className={STYLES.spacing.stack}>
      <div>
        <label className={STYLES.label}>Name</label>
        <div className="mt-1 text-gray-900">{user?.name}</div>
      </div>
      <div>
        <label className={STYLES.label}>Email</label>
        <div className="mt-1 text-gray-900">{user?.email}</div>
      </div>
    </div>
  </div>
);

export default ProfileInfo; 