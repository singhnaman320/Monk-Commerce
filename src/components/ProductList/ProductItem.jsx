import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { PencilIcon, XMarkIcon, ChevronUpIcon, ChevronDownIcon, Bars3Icon } from '@heroicons/react/24/outline';
import ProductVariant from './ProductVariant';

const ProductItem = ({ product, index, onEdit, onRemove, showRemove }) => {
  const [showVariants, setShowVariants] = useState(false);
  const [discount, setDiscount] = useState({ type: '%', value: 0 });

  const hasMultipleVariants = product.variants.length > 1;

  return (
    <Draggable draggableId={`product-${product.id}`} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="bg-white rounded-lg shadow-sm p-4 mb-4 relative group"
        >
          <div
            {...provided.dragHandleProps}
            className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 cursor-move"
          >
            <Bars3Icon className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="flex items-center justify-between pl-6">
            <div className="flex items-center gap-4">
              <img 
                src={product.image.src} 
                alt={product.title}
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <h3 className="font-medium">{product.title}</h3>
                {hasMultipleVariants && (
                  <button
                    onClick={() => setShowVariants(!showVariants)}
                    className="text-blue-600 text-sm flex items-center gap-1"
                  >
                    {showVariants ? (
                      <>
                        <ChevronUpIcon className="w-4 h-4" />
                        Hide variants
                      </>
                    ) : (
                      <>
                        <ChevronDownIcon className="w-4 h-4" />
                        Show variants
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="0"
                  value={discount.value}
                  onChange={(e) => setDiscount({ 
                    ...discount, 
                    value: Math.max(0, Number(e.target.value))
                  })}
                  className="w-16 border rounded px-2 py-1"
                />
                <select
                  value={discount.type}
                  onChange={(e) => setDiscount({ ...discount, type: e.target.value })}
                  className="border rounded px-2 py-1"
                >
                  <option value="%">% Off</option>
                  <option value="flat">Flat</option>
                </select>
              </div>
              
              <button onClick={() => onEdit(product.id)}>
                <PencilIcon className="w-5 h-5 text-gray-600" />
              </button>
              
              {showRemove && (
                <button onClick={() => onRemove(product.id)}>
                  <XMarkIcon className="w-5 h-5 text-gray-600" />
                </button>
              )}
            </div>
          </div>

          {showVariants && hasMultipleVariants && (
            <div className="mt-4 pl-16">
              {product.variants.map((variant, idx) => (
                <ProductVariant
                  key={variant.id}
                  variant={variant}
                  productId={product.id}
                  index={idx}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default ProductItem;