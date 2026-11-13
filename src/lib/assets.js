/**
 * Resolución automática de imágenes.
 *
 * Coloca tus archivos dentro de src/assets/ y se detectan solos, sin editar código:
 *   src/assets/brand/logo.png            -> logo blanco con fondo transparente (también .svg)
 *   src/assets/hero/hero-sandwich-deluxe.webp -> póster Sandwich Deluxe del Inicio
 *   src/assets/promos/<id>.png           -> producto de la promo con ese id (ver src/data/promos.js)
 *   src/assets/products/<id>.png         -> producto del menú con ese id (ver src/data/menu.js)
 *   src/assets/locations/<id>.jpg        -> foto de la sucursal
 *   src/assets/events/<id>.jpg           -> foto del evento
 *   src/assets/logos/ubereats.svg        -> logo de Uber Eats
 *   src/assets/logos/pedidosya.svg       -> logo de PedidosYa
 *
 * Formatos: svg, png, jpg, jpeg, webp, avif.
 * Para hero, promos y menú lo ideal son fotos RECORTADAS (png/webp con fondo transparente): se
 * muestran "flotando" con sombra. Si subes un .jpg con fondo se muestra dentro de una forma
 * redondeada. Si el archivo no existe se muestra un placeholder.
 */
const files = import.meta.glob('../assets/**/*.{svg,png,jpg,jpeg,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const index = {};
for (const [path, url] of Object.entries(files)) {
  const ext = path.split('.').pop().toLowerCase();
  const key = path.replace('../assets/', '').replace(/\.[a-z0-9]+$/i, '');
  index[key] = { url, ext };
}

/** @param {string} key ej: "products/sandwich-deluxe" (sin extensión) → { url, ext } | null */
export const getAssetInfo = (key) => (key ? index[key] ?? null : null);
export const getAsset = (key) => getAssetInfo(key)?.url ?? null;
