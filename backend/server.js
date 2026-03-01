// backend/server.js
require('dotenv').config();          // Para leer variables de entorno desde .env
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth'); // Tus rutas de auth

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Conectar a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("¡Conectado a MongoDB Atlas!"))
  .catch(err => console.error("Error al conectar a MongoDB:", err));

// Rutas
app.use('/auth', authRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Backend funcionando ✅');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});