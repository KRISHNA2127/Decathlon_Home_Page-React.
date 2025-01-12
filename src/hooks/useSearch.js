import { useState, useCallback, useEffect } from 'react';

const useSearch = (initialQuery = '') => {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchProducts = useCallback(async (searchQuery) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/products/search?q=${searchQuery}`);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (query) {
      const debounceTimeout = setTimeout(() => {
        searchProducts(query);
      }, 300);

      return () => clearTimeout(debounceTimeout);
    }
  }, [query, searchProducts]);

  return { query, setQuery, results, loading };
};

export default useSearch;