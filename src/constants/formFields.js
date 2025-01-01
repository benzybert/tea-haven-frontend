export const registerFormFields = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'Full Name',
    required: true
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email address',
    required: true
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    required: true
  },
  {
    name: 'passwordConfirm',
    type: 'password',
    placeholder: 'Confirm Password',
    required: true
  }
];

export const loginFormFields = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email address',
    required: true
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    required: true
  }
];

export const forgotPasswordFormFields = [
  {
    name: 'email',
    type: 'email',
    label: 'Email address',
    placeholder: 'Enter your email',
    required: true
  }
];

export const resetPasswordFormFields = [
  {
    name: 'password',
    type: 'password',
    label: 'New Password',
    placeholder: 'Enter new password',
    required: true
  },
  {
    name: 'confirmPassword',
    type: 'password',
    label: 'Confirm Password',
    placeholder: 'Confirm your password',
    required: true
  }
];

export const changePasswordFormFields = [
  {
    name: 'currentPassword',
    type: 'password',
    label: 'Current Password',
    required: true
  },
  {
    name: 'newPassword',
    type: 'password',
    label: 'New Password',
    required: true
  },
  {
    name: 'confirmPassword',
    type: 'password',
    label: 'Confirm New Password',
    required: true
  }
]; 