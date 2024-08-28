import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  const [products] = useState([
    { name: 'Smartphone XYZ', price: 100.000, description: 'Con 128 GB de almacenamiento, tendrás espacio más que suficiente para tus fotos, videos y aplicaciones. Además, su batería de larga duración te mantiene conectado todo el día. ¡Mejora tu vida digital con el Smartphone XYZ!' },
    { name: 'Chaqueta de Cuero Vintage', price: 70.000, description: ' Perfecta para los días frescos de otoño o invierno, su forro interior suave te mantendrá cómodo mientras te ves increíble' },
    { name: 'Set de Maquillaje Glamour', price: 50.000, description: 'Este set completo incluye una paleta de sombras de ojos con 12 tonos vibrantes, un delineador de ojos de larga duración, una máscara de pestañas voluminizadora y un labial mate de alto impacto.' },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = () => {
    setCartItems([...cartItems, selectedProduct]);
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h2>Lista de Productos</h2>
          <ProductList products={products} onViewDetails={handleViewDetails} />
        </Col>
        <Col md={6}>
          <h2>Detalles del Producto</h2>
          <ProductDetails product={selectedProduct} onAddToCart={handleAddToCart} />
          <h2 className="mt-4">Carrito</h2>
          <Cart cartItems={cartItems} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;



