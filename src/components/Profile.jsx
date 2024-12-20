import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Your Profile
          </h2>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium text-gray-700">
              Name
            </label>
            <p className="text-gray-900">{user.name}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email
            </label>
            <p className="text-gray-900">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;