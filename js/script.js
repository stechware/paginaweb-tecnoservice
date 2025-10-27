// ====== NAVBAR RESPONSIVA ======
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// ====== FORMULARIO ======
document.getElementById('form-contacto').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (nombre && email && mensaje) {
    alert(`Gracias ${nombre}, tu mensaje ha sido enviado correctamente.`);
    this.reset();
  } else {
    alert("Por favor, completa todos los campos.");
  }
});
