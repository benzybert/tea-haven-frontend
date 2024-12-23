export interface User {
  id: string;
  username: string;
  email: string;
  role: 'user' | 'admin';
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile extends User {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  address?: string;
}