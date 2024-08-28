import React from 'react';
import { Button, Card } from 'react-bootstrap';

function ProductDetails({ product, onAddToCart }) {
  if (!product) return <div>Seleccione un producto para ver los detalles.</div>;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Precio: ${product.price}</Card.Text>
        <Button variant="success" onClick={onAddToCart}>Agregar al Carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductDetails;
