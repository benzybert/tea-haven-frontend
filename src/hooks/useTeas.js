/**
 * Custom hooks for tea-related functionality with separated concerns
 */
import { useState, useEffect, useCallback } from 'react';
import { teaService } from '../services/teaService';

// Separate hook for data fetching
export const useTeaData = () => {
  const [teas, setTeas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchTeas = useCallback(async (params = {}) => {
    try {
      setIsLoading(true);
      const data = await teaService.getAllTeas(params);
      setTeas(data.products || []);
      setLastUpdated(new Date());
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to load tea products');
      setTeas([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const refreshTeas = useCallback(() => {
    fetchTeas();
  }, [fetchTeas]);

  return {
    teas,
    isLoading,
    error,
    lastUpdated,
    refreshTeas,
    fetchTeas
  };
};

// Main hook combining filtering with data
export const useTeas = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { teas, isLoading, error, fetchTeas, ...rest } = useTeaData();

  useEffect(() => {
    fetchTeas(selectedCategory ? { category: selectedCategory } : {});
  }, [selectedCategory, fetchTeas]);

  return {
    teas,
    selectedCategory,
    setSelectedCategory,
    isLoading,
    error,
    ...rest
  };
};