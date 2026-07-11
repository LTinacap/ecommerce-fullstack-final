import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  // 1. Cambiamos el número por un arreglo para guardar los objetos de los productos
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // 2. Ahora recibimos el producto completo y lo sumamos a la lista
  const handleAddToCart = (producto) => {
    setCartItems([...cartItems, producto]);
  };

  return (
    <div>
      {/* 3. Al Navbar le pasamos el largo del arreglo para el contador superior */}
      <Navbar cartCount={cartItems.length} setSearchTerm={setSearchTerm} />
      <Banner />
      
      {/* Estructura para que compartan espacio la lista y el panel lateral */}
      <div style={{ display: 'flex', maxWidth: '1200px', margin: '0 auto', padding: '20px', gap: '20px' }}>
        <div style={{ flex: 3 }}>
          <ProductList onAddToCart={handleAddToCart} searchTerm={searchTerm} />
        </div>
        <div style={{ flex: 1 }}>
          {/* 4. Le pasamos la lista de productos acumulados al Sidebar */}
          <Sidebar cartItems={cartItems} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;