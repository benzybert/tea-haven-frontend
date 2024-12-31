import { useState } from 'react';

export const useFormHandler = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData(initialState);
    setMessage('');
  };

  return {
    formData,
    setFormData,
    isLoading,
    setIsLoading,
    message,
    setMessage,
    handleChange,
    resetForm
  };
}; 