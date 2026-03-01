// backend/routes/auth.js
const express = require('express');
const router = express.Router();

// Ruta de prueba: register
router.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  // Por ahora solo devolvemos los datos que nos envían
  res.json({ message: 'Usuario recibido ✅', user: { username, email } });
});

module.exports = router;