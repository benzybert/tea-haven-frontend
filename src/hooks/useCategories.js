import React, { useState, useMemo } from 'react';

export const useCategories = (items, defaultFilter = 'all') => {
  const [filter, setFilter] = useState(defaultFilter);

  const filteredItems = useMemo(() => 
    filter === 'all' 
      ? items 
      : items.filter(item => item.category?.toLowerCase() === filter),
    [items, filter]
  );

  return {
    filter,
    setFilter,
    filteredItems
  };
}; 