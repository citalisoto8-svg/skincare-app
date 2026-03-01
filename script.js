// app.js
const registerForm = document.getElementById('registerForm');

if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const res = await fetch('https://skincare-backend.onrender.com/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error(err);
      alert('Error al registrarse');
    }
  });
}