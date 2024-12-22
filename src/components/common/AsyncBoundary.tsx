import React, { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  errorFallback?: React.ReactNode;
}

const DefaultLoadingFallback = () => (
  <div className="flex justify-center items-center min-h-[200px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
  </div>
);

const AsyncBoundary: React.FC<Props> = ({
  children,
  fallback = <DefaultLoadingFallback />,
  errorFallback
}) => {
  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export default AsyncBoundary;