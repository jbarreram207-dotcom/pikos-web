import Photo from './Photo';
import Burst from './Burst';
import { useOrder } from '../context';
import { Arrow } from './Icons';

const THEMES = ['yellow', 'ink', 'white'];

/**
 * Promo en formato "póster publicitario": franja diagonal a todo el ancho, título gigante que se
 * superpone al producto, sello de precio, palabra de fondo en contorno. Alterna lados.
 */
export default function PromoBand({ promo, index }) {
  const { open } = useOrder();
  const { id, img, title, tag, description, price, note } = promo;
  const theme = THEMES[index % THEMES.length];
  const flip = index % 2 === 1;

  return (
    <article className={`band band--${theme} ${flip ? 'band--flip' : ''}`}>
      <span className="band__ghost display" aria-hidden="true">
        {title}
      </span>

      <div className="wrap band__in">
        <div className="band__stage">
          <span className="band__blob" aria-hidden="true" />
          <div className="band__photo">
            <Photo src={img || `promos/${id}`} label={title} cutout />
          </div>
          {price != null && !promo.poster && (
            <Burst className="band__price" points={14} inner={0.86}>
              <span className="band__q">Q</span>
              {price}
            </Burst>
          )}
        </div>

        <div className="band__copy">
          {tag && <p className="band__tag marker">{tag}</p>}
          <h2 className="display band__title">{title}</h2>
          <p className="band__desc">{description}</p>
          {note && <p className="band__note">{note}</p>}
          <button type="button" className="btn btn--xl band__btn" onClick={open}>
            Ordenar
            <Arrow className="btn__ico" />
          </button>
        </div>
      </div>
    </article>
  );
}
