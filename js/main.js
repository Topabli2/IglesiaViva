/* ============================================================
   MAIN.JS — Comportamiento general del sitio
   iglesia-viva/js/main.js
============================================================ */

// ── Año dinámico en el footer ──────────────────────────────
document.getElementById("year").textContent = new Date().getFullYear();

// ── Header: clase .scrolled al hacer scroll ───────────────
const header = document.getElementById("header");

const onScroll = () => {
  header.classList.toggle("scrolled", window.scrollY > 30);
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll(); // Ejecutar al cargar por si la página ya está scrolleada

// ── Menú hamburguesa (móvil) ──────────────────────────────
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

hamburger.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  hamburger.classList.toggle("active", isOpen);
  hamburger.setAttribute("aria-expanded", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll("[data-close-menu]").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", false);
    document.body.style.overflow = "";
  });
});

// Cerrar menú con tecla Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileNav.classList.contains("open")) {
    mobileNav.classList.remove("open");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", false);
    document.body.style.overflow = "";
  }
});

// Ocultar fallback cuando el video carga
(function () {
  var video = document.querySelector(".hero__video");
  var fallback = document.querySelector(".hero__bg-fallback");
  if (!video || !fallback) return;
  video.addEventListener("canplay", function () {
    fallback.style.display = "none";
  });
  video.addEventListener("error", function () {
    fallback.style.display = "block";
    video.style.display = "none";
  });
})();

/*Carrusel*/
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carrusel-track');
    const indicadoresContenedor = document.getElementById('carrusel-indicadores');
    const btnPrev = document.querySelector('.carrusel-btn.prev');
    const btnNext = document.querySelector('.carrusel-btn.next');
    
    let eventos = [];
    let indiceActual = 0;

    // 1. Cargar datos desde el JSON
fetch('eventos.json')
    .then(response => response.json())
    .then(data => {
        // Filtrar solo los eventos activos
        eventos = data.filter(evento => evento.activo !== false);
        renderizarCarrusel();
    })
        .catch(error => {
            console.error('Error al cargar los eventos:', error);
            track.innerHTML = '<p style="padding: 2rem;">No hay eventos programados esta semana.</p>';
        });

    // 2. Renderizar el carrusel
    function renderizarCarrusel() {
        track.innerHTML = '';
        indicadoresContenedor.innerHTML = '';

        eventos.forEach((evento, index) => {
            // Crear tarjeta
            const card = document.createElement('div');
            card.className = 'evento-card';
            card.innerHTML = `
                <img src="${evento.imagen}" alt="${evento.titulo}">
                <div class="evento-info">
                    <h3>${evento.titulo}</h3>
                    <div class="evento-fecha">📅 ${evento.fecha}</div>
                    <p>${evento.descripcion}</p>
                </div>
            `;
            track.appendChild(card);

            // Crear indicador (puntito)
            const indicador = document.createElement('div');
            indicador.className = `indicador ${index === 0 ? 'activo' : ''}`;
            indicador.addEventListener('click', () => irASlide(index));
            indicadoresContenedor.appendChild(indicador);
        });

        actualizarPosicion();
    }

    // 3. Lógica de movimiento
    function irASlide(index) {
        indiceActual = index;
        if (indiceActual < 0) indiceActual = eventos.length - 1;
        if (indiceActual >= eventos.length) indiceActual = 0;
        actualizarPosicion();
    }

    function actualizarPosicion() {
        const desplazamiento = -(indiceActual * 100);
        track.style.transform = `translateX(${desplazamiento}%)`;
        
        // Actualizar indicadores
        document.querySelectorAll('.indicador').forEach((ind, i) => {
            ind.classList.toggle('activo', i === indiceActual);
        });
    }

    // Event listeners para botones
    btnPrev.addEventListener('click', () => irASlide(indiceActual - 1));
    btnNext.addEventListener('click', () => irASlide(indiceActual + 1));

    // Opcional: Auto-play cada 5 segundos
    setInterval(() => {
        irASlide(indiceActual + 1);
    }, 5000);
});