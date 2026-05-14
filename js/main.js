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
