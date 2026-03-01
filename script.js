// URL de tu backend en Render
const BASE_URL = "https://skincare-backend.onrender.com";

// ===== Registro =====
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
        window.location.href = 'login.html';
      } else {
        alert('Error al registrarse: ' + (data.message || 'Revisa tus datos'));
      }
    } catch (err) {
      alert('Error de conexión: ' + err.message);
    }
  });
}

// ===== Login =====
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        alert('¡Login exitoso! Bienvenida ' + username);
        window.location.href = 'dashboard.html';
      } else {
        alert('Error al iniciar sesión: ' + (data.message || 'Usuario o contraseña incorrectos'));
      }
    } catch (err) {
      alert('Error de conexión: ' + err.message);
    }
  });
}