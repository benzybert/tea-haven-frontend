import { 
  loginSchema, 
  registerSchema, 
  forgotPasswordSchema, 
  resetPasswordSchema, 
  changePasswordSchema 
} from '../forms/schemas';

export const FORM_CONFIG = {
  login: {
    title: "Sign in to your account",
    schema: loginSchema,
    submitText: "Sign in",
    fields: [
      { 
        name: "email", 
        type: "email", 
        placeholder: "Email address",
        autoComplete: "email" 
      },
      { 
        name: "password", 
        type: "password", 
        placeholder: "Password",
        autoComplete: "current-password" 
      }
    ],
    links: [
      {
        text: "create a new account",
        to: "/register",
        prefix: "Or"
      }
    ]
  },
  register: {
    title: "Create your account",
    schema: registerSchema,
    submitText: "Create Account",
    fields: [
      { 
        name: "name", 
        type: "text", 
        placeholder: "Full Name",
        autoComplete: "name" 
      },
      { 
        name: "email", 
        type: "email", 
        placeholder: "Email address",
        autoComplete: "email" 
      },
      { 
        name: "password", 
        type: "password", 
        placeholder: "Password",
        autoComplete: "new-password" 
      },
      { 
        name: "passwordConfirm", 
        type: "password", 
        placeholder: "Confirm Password",
        autoComplete: "new-password" 
      }
    ],
    links: [
      {
        text: "sign in to your account",
        to: "/login",
        prefix: "Or"
      }
    ]
  },
  forgotPassword: {
    title: "Reset your password",
    message: "Enter your email address and we'll send you a link to reset your password.",
    schema: forgotPasswordSchema,
    submitText: "Send reset link",
    successTitle: "Check your email",
    successMessage: "We have sent you a password reset link. Please check your email.",
    fields: [
      { 
        name: "email", 
        type: "email", 
        placeholder: "Email address",
        autoComplete: "email" 
      }
    ]
  },
  resetPassword: {
    title: "Reset your password",
    message: "Please enter your new password.",
    schema: resetPasswordSchema,
    submitText: "Reset Password",
    successRedirect: "/login",
    successMessage: "Password reset successful. Please login with your new password.",
    fields: [
      { 
        name: "password", 
        type: "password", 
        placeholder: "New Password",
        autoComplete: "new-password" 
      },
      { 
        name: "confirmPassword", 
        type: "password", 
        placeholder: "Confirm Password",
        autoComplete: "new-password" 
      }
    ]
  },
  changePassword: {
    title: "Change Password",
    schema: changePasswordSchema,
    submitText: "Change Password",
    fields: [
      { 
        name: "currentPassword", 
        type: "password", 
        label: "Current Password",
        placeholder: "Enter current password",
        autoComplete: "current-password" 
      },
      { 
        name: "newPassword", 
        type: "password", 
        label: "New Password",
        placeholder: "Enter new password",
        autoComplete: "new-password" 
      },
      { 
        name: "confirmPassword", 
        type: "password", 
        label: "Confirm New Password",
        placeholder: "Confirm new password",
        autoComplete: "new-password" 
      }
    ]
  }
}; 