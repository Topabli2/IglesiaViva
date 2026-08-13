# Iglesia Viva — Sitio Web

Sitio web institucional de **Iglesia Viva**. Desarrollado en HTML, CSS y JavaScript puro (sin frameworks), listo para abrir directamente en el navegador o desplegar en cualquier hosting estático.

---

## Estructura del proyecto

```
iglesia-viva/
│
├── index.html                  ← Página principal
│
├── assets/
│   └── img/
│       └── Logo sin fondo.png  ← Logo oficial (colócalo aquí)
│
├── css/
│   ├── variables.css           ← Paleta de colores, fuentes, radios, sombras
│   ├── base.css                ← Reset, body, .container, botones, divider
│   ├── header.css              ← Header fijo, logo, navegación, menú móvil
│   ├── hero.css                ← Sección hero con video de fondo y animaciones
│   ├── sections.css            ← Horarios, En Vivo, Misiones, Visión/Misión
│   ├── contact.css             ← Ubicación, Contacto, redes sociales
│   ├── footer.css              ← Footer, logo, columnas, barra inferior
│   └── responsive.css          ← Media queries tablet (≤900px) y móvil (≤600px)
│
├── js/
│   └── main.js                 ← Año dinámico, scroll del header, menú hamburguesa
│
└── README.md                   ← Este archivo
```

---

## Requisitos previos

No se necesita instalar nada. El sitio funciona abriendo `index.html` directamente en el navegador.

> **Recomendado:** Usa la extensión **Live Server** en Visual Studio Code para previsualización en tiempo real.  
> Clic derecho en `index.html` → *Open with Live Server*.

---

## Configuración inicial

Antes de publicar el sitio, reemplaza todos los valores marcados como `MAYÚSCULAS_PLACEHOLDER` en `index.html`.

### 1. Logo

Coloca el archivo del logo en la raíz del proyecto (junto a `index.html`):

```
iglesia-viva/
└── Logo sin fondo.png   ← archivo requerido aquí
```

El logo ya está referenciado en `index.html` como `src="Logo sin fondo.png"`.  
Si prefieres moverlo a `assets/img/`, actualiza las **dos** líneas en `index.html`:

```html
<!-- En el header -->
<img src="assets/img/Logo sin fondo.png" ... />

<!-- En el footer -->
<img src="assets/img/Logo sin fondo.png" ... />
```

---

### 2. Video de fondo (Hero)

Busca en `index.html`:

```html
<source src="URL_VIDEO_FONDO" type="video/mp4" />
```

Reemplaza `URL_VIDEO_FONDO` con la ruta o URL de tu video:

```html
<!-- Video local (recomendado) -->
<source src="assets/video/culto-fondo.mp4" type="video/mp4" />

<!-- Video desde CDN externo -->
<source src="https://tudominio.com/video/fondo.mp4" type="video/mp4" />
```

> Si no tienes video, el fallback de fondo azul institucional se muestra automáticamente.

---

### 3. Transmisión en vivo de YouTube

Busca en `index.html` todas las ocurrencias de:

```
URL_YOUTUBE_LIVE
```

Reemplaza con el embed de tu canal o video:

```html
<!-- Canal en vivo -->
https://www.youtube.com/embed/live_stream?channel=TU_ID_DE_CANAL

<!-- Video específico -->
https://www.youtube.com/embed/ID_DEL_VIDEO
```

El ID del canal lo encuentras en **YouTube Studio → Configuración → Información del canal**.

---

### 4. Mapa de Google Maps

Busca en `index.html`:

```
URL_GOOGLE_MAPS
```

Para obtener tu embed:
1. Ve a [Google Maps](https://maps.google.com) y busca tu dirección
2. Haz clic en **Compartir → Insertar un mapa**
3. Copia el valor de `src="..."` del iframe generado

```html
<!-- Ejemplo -->
src="https://www.google.com/maps/embed?pb=!1m18!1m12!..."
```

---

### 5. Dirección

Busca en `index.html`:

```
DIRECCION_IGLESIA
Ejemplo: Av. Libertador 4521, Providencia
```

Reemplaza con tu dirección real. Aparece en **dos lugares**: el bloque de información y el enlace del botón "Cómo llegar".

---

### 6. Teléfono

Busca en `index.html`:

```
TELEFONO_IGLESIA
```

Reemplaza en ambas ocurrencias (el `href` y el texto visible):

```html
href="tel:+56212345678"
<p class="contact-link__value">+56 2 1234 5678</p>
```

---

### 7. Correo electrónico

Busca en `index.html`:

```
CORREO_IGLESIA
```

Reemplaza en ambas ocurrencias:

```html
href="mailto:contacto@iglesjaviva.cl"
<p class="contact-link__value">contacto@iglesjaviva.cl</p>
```

---

### 8. WhatsApp

Busca en `index.html`:

```
WHATSAPP_IGLESIA
```

Reemplaza con el número **sin espacios, guiones ni símbolos**, incluyendo código de país:

```html
href="https://wa.me/56912345678"
```

---

### 9. Redes sociales

Busca y reemplaza los siguientes placeholders:

| Placeholder                       | Ejemplo de valor                   |
| --------------------------------- | ---------------------------------- |
| `INSTAGRAM_IGLESIA`               | `iglesjaviva`                      |
| `FACEBOOK_IGLESIA`                | `iglesjaviva`                      |
| `URL_YOUTUBE_LIVE` (botón social) | `https://youtube.com/@iglesjaviva` |

---

### 10. Códigos QR

El sitio incluye dos placeholders de QR. Reemplaza cada bloque `.qr-placeholder` con una etiqueta `<img>`:

**QR de donaciones** (sección Misiones):
```html
<img src="assets/img/qr-donaciones.png" alt="QR de donaciones" width="160" height="160" />
```

**QR del formulario de contacto** (sección Contacto):
```html
<img src="assets/img/qr-formulario.svg" alt="QR formulario de contacto" width="160" height="160" />
```

---

## Paleta de colores

Todos los colores están centralizados en `css/variables.css`. Para modificar cualquier tono, edita **solo ese archivo** y el cambio se propaga automáticamente a todo el sitio.

| Variable        | Hex       | Uso principal                               |
| --------------- | --------- | ------------------------------------------- |
| `--blue-main`   | `#204e93` | Botones, acentos, iconos, bordes destacados |
| `--blue-dark`   | `#163768` | Hover y estados activos                     |
| `--blue-deeper` | `#0f2647` | Footer, hero fallback, textos clave         |
| `--blue-mid`    | `#2d65b8` | Gradientes, etiquetas de tarjetas           |
| `--blue-light`  | `#dce8f7` | Fondos de iconos, tarjetas suaves           |
| `--blue-soft`   | `#eef4fb` | Fondo de secciones alternativas             |
| `--cream`       | `#f5f7fa` | Fondo general de la página                  |
| `--text-main`   | `#0f2647` | Texto principal                             |
| `--text-muted`  | `#4a6080` | Texto secundario                            |
| `--text-light`  | `#7a96b4` | Texto terciario / metadatos                 |

---

## Tipografía

Las fuentes se cargan desde Google Fonts en el `<head>` de `index.html`:

- **Cormorant Garamond** — fuente display para títulos y elementos destacados
- **Outfit** — fuente sans-serif para cuerpo de texto, botones y navegación

Para cambiar las fuentes, actualiza el `<link>` de Google Fonts y las variables en `css/variables.css`:

```css
--font-serif: 'Cormorant Garamond', Georgia, serif;
--font-sans:  'Outfit', sans-serif;
```

---

## Secciones del sitio

| ID de ancla  | Sección             | Descripción                                          |
| ------------ | ------------------- | ---------------------------------------------------- |
| `#inicio`    | Hero                | Video de fondo, título principal y botones de acción |
| `#horarios`  | Horarios            | Tarjetas con los 4 cultos semanales                  |
| `#en-vivo`   | Transmisión en vivo | Embed de YouTube y datos de próxima transmisión      |
| `#misiones`  | Misiones            | Proyectos misioneros y QR de donaciones              |
| `#vision`    | Visión y Misión     | Declaraciones con versículos bíblicos                |
| `#ubicacion` | Ubicación           | Mapa de Google Maps e información práctica           |
| `#contacto`  | Contacto            | Teléfono, email, WhatsApp, redes y QR del formulario |

---

## Despliegue (publicar en internet)

El sitio es 100% estático y compatible con cualquier hosting.

### GitHub Pages (gratuito)
1. Sube la carpeta a un repositorio de GitHub
2. Ve a **Settings → Pages → Source** → selecciona la rama `main`
3. El sitio queda en `https://tuusuario.github.io/iglesia-viva`

### Netlify (gratuito)
1. Ve a [netlify.com](https://netlify.com) y crea una cuenta
2. Arrastra la carpeta `iglesia-viva` al panel principal
3. El sitio queda publicado en segundos con HTTPS automático

### Hosting tradicional (cPanel / FTP)
1. Comprime la carpeta como `.zip`
2. Sube los archivos al directorio `public_html` vía File Manager o FTP
3. El sitio queda disponible en tu dominio

---

## Mantenimiento frecuente

### Actualizar la próxima transmisión

En `index.html`, sección `#en-vivo`:

```html
<p class="live__next-text">Domingo — 10:00 AM · YouTube Live</p>
```

Edita el día, hora o plataforma según corresponda.

### Agregar un proyecto misionero

Duplica una tarjeta `.mission-card` dentro de `.missions__grid` y actualiza el emoji, tag, título y descripción.

### Cambiar el color principal

Edita únicamente `css/variables.css`:

```css
--blue-main: #TU_COLOR_HEX;
```

El cambio se propaga automáticamente a todos los elementos del sitio.

### Agregar una nueva sección

1. Crea el HTML dentro de `<main>` en `index.html` con un `id` único
2. Agrega los estilos en el archivo CSS correspondiente (o crea uno nuevo en `css/`)
3. Enlaza el nuevo CSS en el `<head>` de `index.html`
4. Agrega el enlace al menú de navegación (desktop y móvil)

---

## Créditos

Sitio desarrollado con **HTML5**, **CSS3** y **JavaScript vanilla**.  
Fuentes: [Google Fonts](https://fonts.google.com) — Cormorant Garamond & Outfit.
