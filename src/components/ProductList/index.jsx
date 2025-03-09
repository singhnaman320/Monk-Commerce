import { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import ProductItem from './ProductItem';
import ProductPicker from '../ProductPicker';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(products);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setProducts(items);
  };

  const handleEdit = (productId) => {
    setEditingProductId(productId);
    setIsPickerOpen(true);
  };

  const handleProductSelect = (selectedProducts) => {
    if (editingProductId) {
      // When editing, replace the existing product with selected products
      setProducts(prev => {
        const index = prev.findIndex(p => p.id === editingProductId);
        const newProducts = [...prev];
        newProducts.splice(index, 1, ...selectedProducts);
        return newProducts;
      });
    } else {
      // When adding new products, append all selected products
      setProducts(prev => [...prev, ...selectedProducts]);
    }
    setEditingProductId(null);
  };

  const handleRemove = (productId) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="products">
          {(provided) => (
            <div 
              ref={provided.innerRef} 
              {...provided.droppableProps}
              className="max-h-[70vh] overflow-y-auto"
            >
              {products.map((product, index) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  index={index}
                  onEdit={handleEdit}
                  onRemove={handleRemove}
                  showRemove={products.length > 1}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <button
        onClick={() => setIsPickerOpen(true)}
        className="mt-4 w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400"
      >
        Add Product
      </button>

      <ProductPicker
        isOpen={isPickerOpen}
        onClose={() => {
          setIsPickerOpen(false);
          setEditingProductId(null);
        }}
        onProductSelect={handleProductSelect}
      />
    </div>
  );
};

export default ProductList;