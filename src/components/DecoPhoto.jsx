import { getAsset } from '../lib/assets';

/**
 * Foto real usada SOLO como decoración (no es un producto del menú): recorte con borde, sombra y
 * ligera inclinación. Va oculta a lectores de pantalla y nunca captura clics.
 * name: archivo en src/assets/decor/<name>.webp (buffalo · asian-zing · bbq · crunchers)
 */
export default function DecoPhoto({ name, className = '', rotate = 0, delay = 0 }) {
  const url = getAsset(`decor/${name}`);
  if (!url) return null;
  return (
    <span
      className={`deco-photo ${className}`}
      style={{ '--r': `${rotate}deg`, '--dd': `${delay}ms` }}
      aria-hidden="true"
    >
      <img src={url} alt="" loading="lazy" decoding="async" />
    </span>
  );
}
