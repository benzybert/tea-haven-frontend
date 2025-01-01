// Error messages for consistent user feedback
export const ERROR_MESSAGES = {
  NETWORK: 'Unable to connect to the server. Please check your internet connection.',
  UNAUTHORIZED: 'Please log in to continue.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION: 'Please check your input and try again.',
  SERVER: 'An unexpected error occurred. Please try again later.',
  SESSION_EXPIRED: 'Your session has expired. Please log in again.'
};

// Parse API error responses
export const parseApiError = (error) => {
  // Network error
  if (!error.response) {
    return {
      message: ERROR_MESSAGES.NETWORK
    };
  }

  const { status, data } = error.response;

  // Handle specific status codes
  switch (status) {
    case 400:
      return {
        message: data.message || ERROR_MESSAGES.VALIDATION,
        validationErrors: data.errors
      };
    case 401:
      return {
        message: data.message || ERROR_MESSAGES.UNAUTHORIZED,
        isAuthError: true
      };
    case 403:
      return {
        message: data.message || ERROR_MESSAGES.UNAUTHORIZED,
        isAuthError: true
      };
    case 404:
      return {
        message: data.message || ERROR_MESSAGES.NOT_FOUND
      };
    default:
      return {
        message: ERROR_MESSAGES.SERVER
      };
  }
};

// Async operation wrapper with error handling
export const handleAsync = async (operation) => {
  try {
    const result = await operation();
    return [result, null];
  } catch (error) {
    const parsedError = parseApiError(error);
    return [null, parsedError];
  }
}; 