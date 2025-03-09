import { useState, useEffect, useRef, useCallback } from 'react';
import { useProducts } from '../../hooks/useProducts';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';
import { XMarkIcon } from '@heroicons/react/24/outline';

const ProductPicker = ({ isOpen, onClose, onProductSelect }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const { products, loading, hasMore, fetchProducts, resetSearch } = useProducts();
  const observer = useRef();

  const lastProductRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        fetchProducts();
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  const handleSearch = (searchTerm) => {
    resetSearch();
    fetchProducts(searchTerm);
  };

  const handleProductSelect = (product) => {
    setSelectedProducts(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const [selectedVariants, setSelectedVariants] = useState([]);

  const handleVariantSelect = (productId, variantId) => {
    setSelectedVariants(prev => {
      if (prev.includes(variantId)) {
        return prev.filter(id => id !== variantId);
      }
      return [...prev, variantId];
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-300 bg-opacity-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg w-full max-w-2xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-medium">Select Products</h2>
          <button onClick={onClose}>
            <XMarkIcon className="w-6 h-6 text-gray-400" />
          </button>
        </div>
        
        <div className="p-4">
          <SearchBar onSearch={handleSearch} />
          <div className="max-h-[400px] overflow-y-auto">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                ref={index === products.length - 1 ? lastProductRef : null}
                selected={selectedProducts.some(p => p.id === product.id)}
                onSelect={handleProductSelect}
                selectedVariants={selectedVariants}
                onVariantSelect={handleVariantSelect}
              />
            ))}
            {loading && (
              <div className="py-4 text-center text-gray-500">Loading...</div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between p-4 border-t bg-gray-50">
          <div className="text-sm text-gray-600">
            {selectedProducts.length} product{selectedProducts.length !== 1 ? 's' : ''} selected
          </div>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onProductSelect(selectedProducts);
                onClose();
              }}
              className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPicker;