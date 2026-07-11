import React from 'react';
import '../css/Navbar.css';

// Recibimos setSearchTerm
const Navbar = ({ cartCount, setSearchTerm }) => {
  return (
    <nav>
      <div className="top-bar">
        <h2>TechStore</h2>
        {/* Usamos onChange para guardar lo que el usuario escribe */}
        <input 
          type="text" 
          placeholder="Buscar productos..." 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        
        <div className="user-actions">
          <button>Iniciar Sesión</button>
          <button>Registrarse</button>
          <span>🛒 Carrito ({cartCount})</span>
        </div>
      </div>
      
      <ul className="nav-menu">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Ofertas</li>
        <li>Nosotros</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
};

export default Navbar;