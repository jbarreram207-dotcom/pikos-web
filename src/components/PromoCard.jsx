import Photo from './Photo';
import { useOrder } from '../context';

/** Tarjeta de promo con estética de anuncio. Datos en src/data/promos.js */
export default function PromoCard({ promo, featured = false }) {
  const { open } = useOrder();
  const { id, img, title, tag, description, price, note, theme = 'red' } = promo;

  return (
    <article className={`promo promo--${theme} ${featured ? 'promo--feature' : ''}`}>
      <div className="promo__media">
        <Photo src={img || `promos/${id}`} label={title} ratio={featured ? undefined : '4/3'} cutout />
        {price != null && !promo.poster && (
          <div className="promo__price" aria-label={`Precio: Q${price}`}>
            <span className="promo__q">Q</span>
            <span className="promo__n">{price}</span>
          </div>
        )}
        {tag && <span className="promo__tag marker">{tag}</span>}
      </div>

      <div className="promo__body">
        <h3 className="display promo__title">{title}</h3>
        <p className="promo__desc">{description}</p>
        {note && <p className="promo__note">{note}</p>}
        <button type="button" className="btn promo__btn" onClick={open}>
          Ordenar
        </button>
      </div>
    </article>
  );
}
