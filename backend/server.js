const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Producto = require('./models/Producto');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb://127.0.0.1:27017/techstore')
  .then(() => console.log('Conectado a la base de datos MongoDB ✅'))
  .catch((err) => console.error('Error al conectar a MongoDB ❌', err));

app.get('/api/estado', (req, res) => {
  res.json({ mensaje: 'El backend de TechStore está funcionando al 100%' });
});
app.get('/api/productos', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener productos de MongoDB" });
  }
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor Backend corriendo en http://localhost:${PORT} 🚀`);
});