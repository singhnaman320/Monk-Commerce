import { forwardRef } from 'react';

const ProductCard = forwardRef(({ product, selected, onSelect, selectedVariants = [], onVariantSelect }, ref) => {
  return (
    <div ref={ref} className="border-b border-gray-200 py-2">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onSelect(product)}
          className="w-4 h-4 accent-green-600 rounded border-gray-300 focus:ring-green-500 focus:ring-2"
        />
        <img
          src={product.image.src}
          alt={product.title}
          className="w-8 h-8 object-cover rounded"
        />
        <div className="flex-grow">
          <h3 className="text-sm font-normal text-gray-800">{product.title}</h3>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            {product.variants[0]?.inventory || 99} available
          </span>
          <span className="text-sm text-gray-800">
            ${product.variants[0]?.price || '3.99'}
          </span>
        </div>
      </div>
      
      {product.variants.length > 1 && (
        <div className="ml-14 mt-2">
          {product.variants.map((variant) => (
            <div key={variant.id} className="flex items-center gap-3 py-1">
              <input
                type="checkbox"
                checked={selectedVariants.includes(variant.id)}
                onChange={() => onVariantSelect(product.id, variant.id)}
                className="w-4 h-4 accent-green-600 rounded border-gray-300 focus:ring-green-500 focus:ring-2"
              />
              <span className="text-sm text-gray-700">{variant.title}</span>
              <div className="flex-grow" />
              <span className="text-sm text-gray-600">
                {variant.inventory || 99} available
              </span>
              <span className="text-sm text-gray-800 w-12 text-right">
                ${variant.price}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;