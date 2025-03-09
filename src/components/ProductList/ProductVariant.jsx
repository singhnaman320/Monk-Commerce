import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

const ProductVariant = ({ variant, productId, index }) => {
  const [discount, setDiscount] = useState({ type: '%', value: 0 });

  return (
    <Draggable draggableId={`variant-${variant.id}`} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="flex items-center justify-between py-2 border-b last:border-b-0"
        >
          <span className="text-sm text-gray-700">{variant.title}</span>
          
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={discount.value}
              onChange={(e) => setDiscount({ ...discount, value: e.target.value })}
              className="w-16 border rounded px-2 py-1 text-sm"
            />
            <select
              value={discount.type}
              onChange={(e) => setDiscount({ ...discount, type: e.target.value })}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value="%">% Off</option>
              <option value="flat">Flat</option>
            </select>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default ProductVariant;