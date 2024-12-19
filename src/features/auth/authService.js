import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/api/auth/`;

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + 'register', {
    email: userData.email,
    password: userData.password,
    first_name: userData.name.split(' ')[0],
    last_name: userData.name.split(' ').slice(1).join(' ') || ''
  });

  if (response.data.success) {
    localStorage.setItem('user', JSON.stringify(response.data.data.user));
    localStorage.setItem('token', response.data.data.token);
  }

  return response.data.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', {
    email: userData.email,
    password: userData.password
  });

  if (response.data.success) {
    localStorage.setItem('user', JSON.stringify(response.data.data.user));
    localStorage.setItem('token', response.data.data.token);
  }

  return response.data.data;
};

// Get current user
const getCurrentUser = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(API_URL + 'me', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (response.data.success) {
    localStorage.setItem('user', JSON.stringify(response.data.data.user));
  }

  return response.data.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser
};

export default authService;