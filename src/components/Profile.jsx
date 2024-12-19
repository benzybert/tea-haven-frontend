import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';
import { useAuth } from '../hooks/useAuth';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white shadow rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        
        <div className="space-y-4">
          <div>
            <h2 className="text-sm font-medium text-gray-500">Name</h2>
            <p className="text-lg">{user.name}</p>
          </div>
          
          <div>
            <h2 className="text-sm font-medium text-gray-500">Email</h2>
            <p className="text-lg">{user.email}</p>
          </div>

          <div className="pt-4">
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;