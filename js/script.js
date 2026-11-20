// Menú móvil
const botonMenu = document.querySelector('.menu-boton');
const menu = document.getElementById('menu');
botonMenu.addEventListener('click', () => {
  const abierto = menu.classList.toggle('abierto');
  botonMenu.setAttribute('aria-expanded', abierto);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('abierto');
  botonMenu.setAttribute('aria-expanded', 'false');
}));

// Botones de demostración: muestran un aviso en lugar de navegar
const aviso = document.getElementById('aviso');
let temporizador;
document.querySelectorAll('[data-demo]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    aviso.classList.add('visible');
    clearTimeout(temporizador);
    temporizador = setTimeout(() => aviso.classList.remove('visible'), 2500);
  });
});

// Año del pie de página
document.getElementById('anio').textContent = new Date().getFullYear();
