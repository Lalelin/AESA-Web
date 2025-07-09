// Año automático en footer
document.getElementById("year").textContent = new Date().getFullYear();

// Simular envío del formulario y mostrar modal
document.querySelector(".formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("modal").style.display = "flex";
  this.reset();
});

// Cerrar modal
document.getElementById("cerrar-modal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

// Animar elementos

const elementosAnimados = document.querySelectorAll('.animado');

const mostrarElementos = () => {
  elementosAnimados.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const visible = window.innerHeight - 100;
    if (top < visible) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', mostrarElementos);
window.addEventListener('load', mostrarElementos);

// Acordeón para Preguntas Frecuentes

const preguntas = document.querySelectorAll('.pregunta');

preguntas.forEach(pregunta => {
  pregunta.addEventListener('click', () => {
    const item = pregunta.parentElement;
    item.classList.toggle('activa');
  });
});