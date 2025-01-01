import { useCallback } from 'react';

export const useFormSubmit = (submitFn, onSuccess) => {
  return useCallback(async (formData) => {
    try {
      await submitFn(formData);
      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      console.error(err);
    }
  }, [submitFn, onSuccess]);
}; 