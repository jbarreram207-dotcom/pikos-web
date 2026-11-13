import { Link } from 'react-router-dom';
import { getAsset } from '../lib/assets';

/**
 * Logo de Píkos. Si existe src/assets/brand/logo.(svg|png|webp) se usa el oficial;
 * mientras tanto se muestra un wordmark tipográfico de respaldo.
 */
export default function Logo({ className = '', onClick }) {
  const src = getAsset('brand/logo');
  return (
    <Link to="/" className={`logo ${className}`} aria-label="Píkos — ir a Inicio" onClick={onClick}>
      {src ? (
        <img src={src} alt="Píkos" />
      ) : (
        <span className="logo__text" aria-hidden="true">
          PÍKOS
        </span>
      )}
    </Link>
  );
}
