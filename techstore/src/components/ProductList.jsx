import React from 'react';
import ProductCard from './ProductCard';
import productos from '../data/productos.json';
import '../css/ProductList.css';

// Recibimos searchTerm
const ProductList = ({ onAddToCart, searchTerm }) => {
  
  // Filtramos los productos según lo que se haya escrito en el buscador
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h2>Productos Destacados</h2>
        <a href="#" className="ver-todos">Ver todos</a>
      </div>
      <div className="product-grid">
        {/* Renderizamos la lista ya filtrada en lugar de la lista completa */}
        {productosFiltrados.map((producto) => (
          <ProductCard 
            key={producto.id} 
            producto={producto} 
            onAddToCart={onAddToCart} 
          />
        ))}
      </div>
      
      {/* Pequeño mensaje si no se encuentra nada */}
      {productosFiltrados.length === 0 && (
        <p style={{ textAlign: 'center', marginTop: '20px', gridColumn: '1 / -1' }}>
          No se encontraron productos que coincidan con tu búsqueda.
        </p>
      )}
    </div>
  );
};

export default ProductList;