import { getAsset } from '../lib/assets';

/**
 * Logo de la plataforma de delivery. Usa src/assets/logos/<id>.(svg|png|webp) si existe;
 * si no, muestra el nombre como texto para no inventar logotipos.
 */
export default function PlatformLogo({ id, name }) {
  const src = getAsset(`logos/${id}`);
  if (src) return <img className="plogo__img" src={src} alt={name} />;
  return <span className={`plogo__txt plogo__txt--${id}`}>{name}</span>;
}
