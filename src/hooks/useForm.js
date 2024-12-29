// src/hooks/useForm.js
import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (submitFn) => async (e) => {
    e.preventDefault();
    try {
      await submitFn(values);
    } catch (err) {
      setErrors(prev => ({
        ...prev,
        form: err.message
      }));
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    setErrors
  };
};