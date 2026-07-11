const mongoose = require('mongoose');
const Producto = require('./models/Producto');


mongoose.connect('mongodb://127.0.0.1:27017/techstore')
  .then(async () => {
    console.log('Conectado a MongoDB para sembrar datos... 🌱');

    await Producto.deleteMany({});

  
    const productosIniciales = [
      { nombre: "Notebook Gamer ASUS ROG Strix", precio: 1299990, valoracion: 5, imagen: "notebook.jpg" },
      { nombre: "iPhone 15 Pro Max 256GB", precio: 1219990, valoracion: 5, imagen: "iphone.jpg" },
      { nombre: "Monitor LG UltraGear 27\" 165Hz", precio: 349990, valoracion: 4, imagen: "monitor.jpg" },
      { nombre: "Mouse Gamer Logitech G502", precio: 49990, valoracion: 5, imagen: "mouse.jpg" },
      { nombre: "Teclado Mecánico Redragon", precio: 39990, valoracion: 4, imagen: "teclado.jpg" },
      { nombre: "Audífonos HyperX Cloud Flight", precio: 79990, valoracion: 5, imagen: "audifonos.jpg" },
      { nombre: "SSD Kingston NV2 1TB M.2", precio: 389990, valoracion: 5, imagen: "ssd.jpg" },
      { nombre: "Memoria RAM Kingston Fury 16GB", precio: 45990, valoracion: 4, imagen: "ram.jpg" }
    ];

    await Producto.insertMany(productosIniciales);
    console.log('¡Base de datos poblada con los 8 productos con éxito! 🚀');

    mongoose.disconnect();
  })
  .catch(err => console.error('Error al sembrar datos:', err));