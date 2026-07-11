import React from 'react';
import '../css/Banner.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-text">
        <h1>La tecnología que lleva tu mundo al siguiente nivel</h1>
        <p>Descubre los mejores productos en tecnología con las mejores ofertas</p>
        <button className="btn-ofertas">VER OFERTAS &gt;</button>
      </div>
      
    
      <div className="banner-image-box">
        <img 
          src="/notebook.jpg" 
          alt="Producto Destacado" 
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default Banner;