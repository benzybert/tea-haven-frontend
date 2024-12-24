# Tea Haven E-commerce Frontend

Welcome to the Tea Haven E-commerce frontend repository. This README provides an overview of the project, setup instructions, and other relevant information.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Authentication Features](#authentication-features)
- [Getting Started](#getting-started)
- [Environment Setup](#environment-setup)
- [Folder Structure](#folder-structure)
- [Authentication Flow](#authentication-flow)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Tea Haven is an e-commerce platform for tea enthusiasts. This repository contains the frontend codebase, which is responsible for the user interface and client-side functionality.

## Technologies Used
- React: A JavaScript library for building user interfaces
- Redux: A predictable state container for JavaScript apps
- React Router: A collection of navigational components for React applications
- Axios: A promise-based HTTP client for the browser and Node.js
- Styled Components: A library for styling React components using tagged template literals
- JWT: JSON Web Tokens for secure authentication
- Jest: A delightful JavaScript testing framework with a focus on simplicity

## Authentication Features

- User registration with email verification
- Secure login with JWT
- Password reset functionality
- Protected routes
- Persistent login state
- Role-based access control
- Session management
- Cross-Site Request Forgery (CSRF) protection

## Getting Started

To get a local copy of the project up and running, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/benzybert/tea-haven-frontend.git
    ```
2. Navigate to the frontend directory:
    ```sh
    cd tea-haven-frontend
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
REACT_APP_API_URL=your_backend_api_url
REACT_APP_JWT_SECRET=your_jwt_secret
REACT_APP_TOKEN_EXPIRY=3600
```

### Running the Application

To start the development server, run:
```sh
npm start
```
or
```sh
yarn start
```
The application will be available at `http://localhost:3000`.

## Folder Structure

```
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── ForgotPassword.js
│   │   │   └── ProtectedRoute.js
│   ├── contexts/
│   │   └── AuthContext.js
│   ├── hooks/
│   │   └── useAuth.js
│   ├── pages/
│   ├── redux/
│   │   └── slices/
│   │       └── authSlice.js
│   ├── services/
│   │   └── auth.service.js
│   ├── utils/
│   │   └── auth.utils.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## Authentication Flow

### Registration
1. User submits registration form
2. Frontend validates input
3. Sends request to backend
4. User receives verification email
5. Email verification confirms account

### Login
1. User submits login credentials
2. Frontend validates input
3. Backend authenticates and returns JWT
4. Token stored securely in localStorage
5. User redirected to protected route

### Protected Routes
- Implemented using Higher Order Components
- Checks for valid JWT
- Redirects unauthorized users
- Handles token expiration

### Security Measures
- JWT stored securely
- CSRF protection implemented
- Password requirements enforced
- Rate limiting on auth endpoints
- Input sanitization
- Secure password reset flow

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.