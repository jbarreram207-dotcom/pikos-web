import { getAssetInfo } from '../lib/assets';

const TRANSPARENT_EXT = ['png', 'webp', 'avif', 'svg'];

/**
 * Foto con placeholder automático.
 * - src: clave del asset sin extensión, ej. "products/sandwich-deluxe" (ver src/lib/assets.js)
 * - label: texto del placeholder y alt de la imagen
 * - ratio: "4/5", "16/9"… (si se omite, rellena al contenedor padre)
 * - cutout: producto recortado. Si el archivo es png/webp/avif/svg se muestra "flotando" con
 *   sombra; si es jpg se muestra recortado en una forma orgánica.
 */
export default function Photo({ src, label = 'Foto', ratio, className = '', eager = false, cutout = false }) {
  const info = getAssetInfo(src);
  const url = info?.url ?? null;
  const floating = cutout && url && TRANSPARENT_EXT.includes(info.ext);
  const mode = floating ? 'photo--cut' : cutout ? 'photo--blob' : '';
  const style = ratio ? { aspectRatio: ratio } : undefined;
  const cls = `photo ${ratio ? '' : 'photo--fill'} ${mode} ${url ? '' : 'photo--empty'} ${className}`;

  if (url) {
    return (
      <div className={cls} style={style}>
        <img src={url} alt={label} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      </div>
    );
  }

  return (
    <div className={cls} style={style} role="img" aria-label={`Foto pendiente: ${label}`}>
      <div className="photo__ph">
        <span className="photo__tag">Foto pendiente</span>
        <strong>{label}</strong>
        <code>src/assets/{src}.png</code>
      </div>
    </div>
  );
}
