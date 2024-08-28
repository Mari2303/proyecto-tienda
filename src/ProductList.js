import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, onViewDetails }) {
  return (
    <div className="d-flex flex-wrap">
      {products.map((product, index) => (
        <ProductItem
          key={index}
          name={product.name}
          price={product.price}
          onViewDetails={() => onViewDetails(product)}
        />
      ))}
    </div>
  );
}

export default ProductList;

