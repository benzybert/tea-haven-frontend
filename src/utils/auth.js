// Token management utilities
export const getToken = () => localStorage.getItem('token');

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

// Token validation and expiration
export const isTokenValid = (token) => {
  if (!token) return false;
  
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expirationTime = payload.exp * 1000; // Convert to milliseconds
    return Date.now() < expirationTime;
  } catch {
    return false;
  }
};

export const getTokenExpirationTime = (token) => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp * 1000; // Convert to milliseconds
  } catch {
    return null;
  }
};

// Session management
export const setupTokenRefresh = (refreshCallback) => {
  const token = getToken();
  if (!token) return;

  const expirationTime = getTokenExpirationTime(token);
  if (!expirationTime) return;

  const timeUntilExpiration = expirationTime - Date.now();
  const refreshBuffer = 5 * 60 * 1000; // 5 minutes before expiration

  if (timeUntilExpiration > refreshBuffer) {
    setTimeout(refreshCallback, timeUntilExpiration - refreshBuffer);
  } else {
    refreshCallback();
  }
};