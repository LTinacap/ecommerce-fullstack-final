import React from 'react';
import '../css/ProductCard.css';

const ProductCard = ({ producto, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        {/* Aquí cambiamos el placeholder por una etiqueta img real */}
        <img 
          src={`/${producto.imagen}`} 
          alt={`Imagen de ${producto.nombre}`} 
          className="real-product-image"
        />
      </div>
      <h3 className="product-name">{producto.nombre}</h3>
      <div className="product-rating">{"⭐".repeat(producto.valoracion)}</div>
      <p className="product-price">${producto.precio.toLocaleString('es-CL')}</p>
      
      <button className="btn-add-cart" onClick={() => onAddToCart(producto)}>
        🛒 Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;