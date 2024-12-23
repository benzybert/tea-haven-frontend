import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

// src/context/AuthContext.js

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const register = async (userData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.post('http://localhost:5001/api/auth/register', userData);
            setUser(response.data.user);
            setIsAuthenticated(true);
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
            setIsAuthenticated(false);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, isLoading, error, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};