/**
 * Single Responsibility: Manages tea product data, including fetching, filtering,
 * and state management. Combines data fetching with category filtering.
 */
import { useState, useEffect } from 'react';
import { teaService } from '../services/teaService';

export const useTeas = () => {
  const [teas, setTeas] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeas = async () => {
      try {
        setIsLoading(true);
        const data = selectedCategory
          ? await teaService.getTeasByCategory(selectedCategory)
          : await teaService.getAllTeas();
        setTeas(data);
        setError(null);
      } catch (err) {
        setError('Failed to load tea products. Please try again later.');
        setTeas([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeas();
  }, [selectedCategory]);

  return {
    teas,
    selectedCategory,
    setSelectedCategory,
    isLoading,
    error
  };
};