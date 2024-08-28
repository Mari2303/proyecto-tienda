import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';

function Cart({ cartItems }) {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Carrito de Compras</Card.Title>
        <ListGroup>
          {cartItems.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.name} - ${item.price}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Text className="mt-3">
          Total: ${totalPrice.toFixed(2)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cart;
