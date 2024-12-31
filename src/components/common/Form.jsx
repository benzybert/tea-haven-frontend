/**
 * Single Responsibility: Provides a reusable form component that handles input rendering,
 * form submission, loading states, and error display in a consistent manner across the application.
 */
import React from 'react';
import Input from '../forms/Input';
import Button from '../forms/Button';

const Form = ({ 
  onSubmit, 
  fields, 
  submitText, 
  isLoading, 
  error 
}) => (
  <form onSubmit={onSubmit} className="mt-8 space-y-6">
    {error && (
      <div className="rounded-md bg-red-50 p-4">
        <p className="text-sm text-red-700">{error}</p>
      </div>
    )}
    <div className="rounded-md shadow-sm -space-y-px">
      {fields.map((field, index) => (
        <Input
          key={field.name}
          {...field}
          isFirst={index === 0}
          isLast={index === fields.length - 1}
        />
      ))}
    </div>
    <Button type="submit" disabled={isLoading}>
      {isLoading ? `${submitText}...` : submitText}
    </Button>
  </form>
);

export default Form; 