import { useState, useCallback } from 'react';
import { searchProducts } from '../services/api';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const fetchProducts = useCallback(async (searchTerm = '') => {
    try {
      setLoading(true);
      setError(null);
      const data = await searchProducts(searchTerm, page);
      
      if (data.length < 10) {
        setHasMore(false);
      }

      setProducts(prev => page === 0 ? data : [...prev, ...data]);
      setPage(prev => prev + 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [page]);

  const resetSearch = () => {
    setProducts([]);
    setPage(0);
    setHasMore(true);
  };

  return {
    products,
    loading,
    error,
    hasMore,
    fetchProducts,
    resetSearch
  };
};