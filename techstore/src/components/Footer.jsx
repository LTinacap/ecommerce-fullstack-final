import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-info">
        <h3>TechStore Chile</h3>
        <p>📍 Dirección: Los Ángeles, Biobío</p>
        <p>✉️ Correo: contacto@techstore.cl</p>
        <p>📞 Teléfono: +56 9 1234 5678</p>
        <p>📱 Redes Sociales: @techstore_cl</p>
      </div>
      <div className="footer-bottom">
        <p>☑ Derechos Reservados 2026</p>
      </div>
    </footer>
  );
};

export default Footer;