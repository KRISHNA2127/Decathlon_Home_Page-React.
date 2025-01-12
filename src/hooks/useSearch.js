import { useState, useCallback, useEffect } from 'react';

/**
 * A custom hook for handling product search functionality
 * @param {string} initialQuery - The initial search query (optional)
 * @returns {Object} An object containing search state and functions
 */
const useSearch = (initialQuery = '') => {
  // State for the search query
  const [query, setQuery] = useState(initialQuery);
  
  // State for search results
  const [results, setResults] = useState([]);
  
  // State for loading status
  const [loading, setLoading] = useState(false);

  // Memoized search function to prevent unnecessary re-renders
  const searchProducts = useCallback(async (searchQuery) => {
    // Don't search if query is empty
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    
    try {
      // Make API call to search endpoint
      const response = await fetch(`/api/products/search?q=${encodeURIComponent(searchQuery)}`);
      
      if (!response.ok) {
        throw new Error(`Search failed with status: ${response.status}`);
      }
      
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Search failed:', error);
      // Set empty results in case of error
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []); // Empty dependency array since this function doesn't depend on any props or state

  // Effect to handle search with debouncing
  useEffect(() => {
    // Create a debounce timeout to avoid too many API calls
    const debounceTimeout = setTimeout(() => {
      if (query) {
        searchProducts(query);
      }
    }, 300); // Wait 300ms after the user stops typing before searching

    // Cleanup function to clear timeout if query changes before timeout expires
    return () => clearTimeout(debounceTimeout);
  }, [query, searchProducts]);

  return {
    query,      // Current search query
    setQuery,   // Function to update search query
    results,    // Search results array
    loading     // Boolean indicating if search is in progress
  };
};

export default useSearch;