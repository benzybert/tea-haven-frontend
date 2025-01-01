// Validation rules for different form types
export const VALIDATION_RULES = {
  required: (value) => (!value ? 'This field is required' : ''),
  email: (value) => {
    if (!value) return '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailRegex.test(value) ? 'Invalid email address' : '';
  },
  password: (value) => {
    if (!value) return '';
    if (value.length < 8) return 'Password must be at least 8 characters';
    if (!/\d/.test(value)) return 'Password must contain at least one number';
    if (!/[a-z]/.test(value)) return 'Password must contain at least one lowercase letter';
    if (!/[A-Z]/.test(value)) return 'Password must contain at least one uppercase letter';
    return '';
  },
  passwordMatch: (value, values) => {
    if (!value) return '';
    return value !== values.password ? 'Passwords do not match' : '';
  },
  name: (value) => {
    if (!value) return '';
    if (value.length < 2) return 'Name must be at least 2 characters';
    return '';
  }
};

// Form schemas for different form types
export const FORM_SCHEMAS = {
  login: {
    email: [VALIDATION_RULES.required, VALIDATION_RULES.email],
    password: [VALIDATION_RULES.required]
  },
  register: {
    name: [VALIDATION_RULES.required, VALIDATION_RULES.name],
    email: [VALIDATION_RULES.required, VALIDATION_RULES.email],
    password: [VALIDATION_RULES.required, VALIDATION_RULES.password],
    confirmPassword: [VALIDATION_RULES.required, VALIDATION_RULES.passwordMatch]
  },
  passwordReset: {
    email: [VALIDATION_RULES.required, VALIDATION_RULES.email]
  },
  passwordChange: {
    currentPassword: [VALIDATION_RULES.required],
    newPassword: [VALIDATION_RULES.required, VALIDATION_RULES.password],
    confirmPassword: [VALIDATION_RULES.required, VALIDATION_RULES.passwordMatch]
  }
}; 