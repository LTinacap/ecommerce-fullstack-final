import React from 'react';
import '../css/Sidebar.css';

const Sidebar = ({ cartItems }) => {
  // Calculamos el total sumando el precio de cada producto en el carrito
  const total = cartItems.reduce((acumulador, item) => acumulador + item.precio, 0);

  return (
    <aside className="sidebar-cart">
      <h3>🛒 Detalle de Compra</h3>
      
      {cartItems.length === 0 ? (
        <p className="empty-cart">No hay productos en el carrito.</p>
      ) : (
        <div className="cart-content">
          <ul className="cart-items-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <span className="item-name">{item.nombre}</span>
                <span className="item-price">${item.precio.toLocaleString('es-CL')}</span>
              </li>
            ))}
          </ul>
          
          <div className="cart-total-section">
            <h4>Total:</h4>
            <p className="cart-total-price">${total.toLocaleString('es-CL')}</p>
          </div>
          
          <button className="btn-checkout">Finalizar Pedido</button>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;