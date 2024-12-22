import React from 'react';
import { useAuth } from '../features/auth/hooks/useAuth';
import { Card, Button } from '../components/common';

const ProfilePage: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <Card 
        className="max-w-2xl mx-auto"
        title="Profile"
      >
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
            <Button 
              variant="primary" 
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;