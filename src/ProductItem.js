import React from 'react';
import { Button, Card } from 'react-bootstrap';

function ProductItem({ name, price, onViewDetails }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Button variant="primary" onClick={onViewDetails}>Ver Detalles</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;

