# Tea Haven E-commerce Frontend

Welcome to the Tea Haven E-commerce frontend repository. This README provides an overview of the project, setup instructions, and other relevant information.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Authentication Features](#authentication-features)
- [Getting Started](#getting-started)
- [Environment Setup](#environment-setup)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Tea Haven is an e-commerce platform for tea enthusiasts. This repository contains the frontend codebase, which is responsible for the user interface and client-side functionality.

## Technologies Used
- React 18.3.1
- React Router DOM 7.0.2
- Axios 1.7.9
- Tailwind CSS 3.4.16
- Headless UI React 2.2.0
- Lucide React 0.263.1

## Authentication Features

- User authentication using Context API
- Protected routes for authenticated users
- Login and registration functionality
- User profile management
- Session handling

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
2. Navigate to the project directory:
    ```sh
    cd tea-haven-frontend
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
REACT_APP_API_URL=your_backend_api_url
```

### Running the Application

To start the development server, run:
```sh
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
tea-haven-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── container/      # Container components
│   │   └── presentational/ # Presentational components
│   ├── context/
│   │   ├── AuthContext.jsx # Authentication context
│   │   └── CartContext.jsx # Shopping cart context
│   ├── hooks/             # Custom React hooks
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Products.js
│   │   ├── Profile.jsx
│   │   └── Register.jsx
│   ├── services/          # API service functions
│   ├── styles/            # Global styles and Tailwind config
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Root component
│   └── index.js           # Application entry point
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please read the contributing guidelines for more information.

## License

This project is licensed under the MIT License. See the LICENSE file for details.