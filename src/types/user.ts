export interface User {
  _id: string;
  email: string;
  first_name: string;
  last_name: string;
  created_at: string;
  last_login?: string;
  role: string;
}

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface UserProfile extends User {
  orders: any[];
  reviews: any[];
}