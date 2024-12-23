import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LoadingSpinner } from '../../components/common';
import { ROUTES } from '../../config/constants';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, logout, isLoading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate(ROUTES.AUTH.LOGIN);
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  if (isLoading) return <LoadingSpinner />;
  if (!user) return null;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">Username</label>
          <p className="mt-1 text-lg">{user.username}</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <p className="mt-1 text-lg">{user.email}</p>
        </div>
        
        <div className="pt-4">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
