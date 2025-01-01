import React from 'react';
import PropTypes from 'prop-types';

const ProfileInfo = ({ user }) => (
  <div>
    <h3 className="text-lg font-medium text-gray-900">Account Information</h3>
    <div className="mt-6 space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <div className="mt-1 text-gray-900">{user?.name}</div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <div className="mt-1 text-gray-900">{user?.email}</div>
      </div>
    </div>
  </div>
);

ProfileInfo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string
  })
};

export default ProfileInfo; 