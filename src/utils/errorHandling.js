// Common error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Unable to connect to the server. Please check your internet connection.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  SERVER_ERROR: 'An unexpected error occurred. Please try again later.',
  SESSION_EXPIRED: 'Your session has expired. Please log in again.'
};

// Error types for consistent handling
export const ERROR_TYPES = {
  VALIDATION: 'VALIDATION_ERROR',
  NETWORK: 'NETWORK_ERROR',
  AUTH: 'AUTH_ERROR',
  API: 'API_ERROR',
  UNKNOWN: 'UNKNOWN_ERROR'
};

// Parse API error responses
export const parseApiError = (error) => {
  if (!error.response) {
    return {
      type: ERROR_TYPES.NETWORK,
      message: ERROR_MESSAGES.NETWORK_ERROR
    };
  }

  const { status, data } = error.response;

  switch (status) {
    case 400:
      return {
        type: ERROR_TYPES.VALIDATION,
        message: data.message || ERROR_MESSAGES.VALIDATION_ERROR,
        errors: data.errors
      };
    case 401:
      return {
        type: ERROR_TYPES.AUTH,
        message: data.message || ERROR_MESSAGES.UNAUTHORIZED
      };
    case 404:
      return {
        type: ERROR_TYPES.API,
        message: data.message || ERROR_MESSAGES.NOT_FOUND
      };
    case 500:
      return {
        type: ERROR_TYPES.API,
        message: ERROR_MESSAGES.SERVER_ERROR
      };
    default:
      return {
        type: ERROR_TYPES.UNKNOWN,
        message: data.message || ERROR_MESSAGES.SERVER_ERROR
      };
  }
};

// Handle async operations with consistent error handling
export const handleAsyncOperation = async (operation, options = {}) => {
  const {
    onSuccess,
    onError,
    showLoader = true,
    showError = true
  } = options;

  try {
    if (showLoader) {
      // You can integrate with your loading state management here
    }
    
    const result = await operation();
    
    if (onSuccess) {
      onSuccess(result);
    }
    
    return result;
  } catch (error) {
    const parsedError = parseApiError(error);
    
    if (showError && onError) {
      onError(parsedError);
    }
    
    throw parsedError;
  } finally {
    if (showLoader) {
      // Clean up loader here
    }
  }
}; 