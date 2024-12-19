import React from 'react';

const Alert = ({ type = 'error', message }) => {
  const styles = {
    error: 'bg-red-50 text-red-700 border-red-100',
    success: 'bg-green-50 text-green-700 border-green-100',
    warning: 'bg-yellow-50 text-yellow-700 border-yellow-100',
    info: 'bg-blue-50 text-blue-700 border-blue-100',
  };

  return (
    <div className={`p-4 rounded-md border ${styles[type]} mb-4`}>
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default Alert;