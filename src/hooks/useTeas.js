/**
 * Single Responsibility: Manages tea product data, including fetching, filtering,
 * and state management. Combines data fetching with category filtering.
 */
import { useState, useEffect } from 'react';
import { teaService } from '../services/teaService';

export const useTeas = () => {
  const [teas, setTeas] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchTeas = async () => {
      try {
        setIsLoading(true);
        const data = await teaService.getAllTeas();
        setTeas(data);
        setLastUpdated(new Date().toISOString());
      } catch (err) {
        setError('Failed to fetch teas');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeas();
  }, []);

  // Filter teas based on selected category
  const filteredTeas = selectedCategory === 'all' 
    ? teas 
    : teas.filter(tea => tea.category.toLowerCase() === selectedCategory.toLowerCase());

  return {
    teas: filteredTeas, // Return filtered teas instead of all teas
    selectedCategory,
    setSelectedCategory,
    isLoading,
    error,
    lastUpdated
  };
};