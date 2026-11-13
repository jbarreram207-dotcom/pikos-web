# Píkos Guatemala — Sitio web

React + Vite + React Router + GSAP. Navegación por rutas reales (`/`, `/promos`, `/menu`, `/ubicaciones`, `/eventos`) en la misma pestaña.

## Ejecutar en Visual Studio Code

Requisitos: [Node.js](https://nodejs.org) 20 o superior.

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (normalmente http://localhost:5173).

Otros comandos:

```bash
npm run build      # genera la carpeta dist/
npm run preview    # sirve dist/ localmente (http://localhost:4173)
```

## Publicar en Vercel

1. Sube el proyecto a un repositorio de GitHub (sin `node_modules` ni `dist`; el `.gitignore` ya los excluye).
2. En vercel.com: **Add New → Project** e importa el repositorio.
3. Vercel detecta Vite solo. Verifica: Build Command `npm run build`, Output Directory `dist`.
4. **Deploy**.

`vercel.json` ya incluye la regla para que las rutas internas (`/menu`, `/promos`…) funcionen al recargar la página.

## Dónde editar el contenido

| Qué | Archivo |
| --- | --- |
| Promociones | `src/data/promos.js` |
| Enlaces de Uber Eats / PedidosYa | `src/data/delivery.js` |
| Sucursales | `src/data/locations.js` |
| Categorías del menú | `src/data/categories.js` |

## Imágenes

> **No abras `index.html` con doble clic**: usa siempre `npm run dev` (o `npm run preview` tras `npm run build`).

Las imágenes se detectan solas: copia el archivo en `src/assets/` con el nombre exacto y el placeholder desaparece (sin tocar código). Formatos: svg, png, jpg, jpeg, webp, avif. Usa solo fotos propias o autorizadas.

```
src/assets/brand/logo.png              LOGO OFICIAL (hoy hay una extracción provisional de baja resolución; reemplazar por el original, ideal SVG/PNG transparente blanco)
src/assets/hero/hero-sandwich-deluxe.webp   póster Sandwich Deluxe del Inicio (667×792)
src/assets/promos/pikos-days.png       PNG recortado, fondo transparente
src/assets/promos/crunch-crew.png
src/assets/promos/ched-fries.png
src/assets/products/<id>.png           PNG recortado por producto (ids en src/data/menu.js)
src/assets/locations/<id>.jpg          zona-10, via-majadas, santa-amelia, punto-16, eskala-roosevelt, sankris-mall
src/assets/events/<id>.jpg             un archivo por evento (id en src/data/events.js)
src/assets/logos/ubereats.svg          logo de Uber Eats
src/assets/logos/pedidosya.svg         logo de PedidosYa
```

Los PNG/WebP/AVIF/SVG se muestran "flotando" con sombra; los JPG se recortan en una forma orgánica.

## Estructura

```
src/
  components/   Navbar, Footer, OrderModal, PromoCard, Photo, Marquee, Reveal, …
  context/      estado global (modal de pedidos, pantalla de carga)
  data/         contenido editable (promos, delivery, sucursales, categorías)
  lib/          utilidades (resolución de imágenes, movimiento reducido, título)
  pages/        Home y vistas
  styles/       global.css, layout.css, home.css
```

## Accesibilidad y rendimiento

- Respeta `prefers-reduced-motion` (sin transiciones de ruta ni animaciones de entrada).
- Los paneles de transición nunca bloquean clics.
- Fuentes autoalojadas con `@fontsource` (sin depender de Google Fonts).
