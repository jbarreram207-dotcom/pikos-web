import { Link } from 'react-router-dom';
import { Arrow } from './Icons';
import PageArt from './PageArt';
import DecoPhoto from './DecoPhoto';

/* Fotos reales de decoración (no son productos del menú) por encabezado */
const DECOR = {
  menu: [
    { name: 'buffalo', cls: 'deco-photo--a', rotate: -9, delay: 150 },
    { name: 'bbq', cls: 'deco-photo--b', rotate: 7, delay: 300 },
  ],
  promos: [
    { name: 'asian-zing', cls: 'deco-photo--a', rotate: -8, delay: 150 },
    { name: 'crunchers', cls: 'deco-photo--b', rotate: 8, delay: 300 },
  ],
};

/** Encabezado de vistas internas: botón para volver a Inicio + título grande (+ ilustración a la derecha). */
export default function PageHead({ kicker, title, children, art }) {
  return (
    <header className={`pagehead wrap ${art ? 'pagehead--art' : ''}`}>
      {art && <PageArt variant={art} />}
      {art && DECOR[art] && (
        <div className="pagehead__decor" aria-hidden="true">
          {DECOR[art].map((d) => (
            <DecoPhoto key={d.name} name={d.name} className={d.cls} rotate={d.rotate} delay={d.delay} />
          ))}
        </div>
      )}
      <div className="pagehead__copy">
        <Link to="/" className="backlink">
          <Arrow className="backlink__ico" />
          Volver a Inicio
        </Link>
        {kicker && <p className="marker pagehead__kicker">{kicker}</p>}
        <h1 className="display pagehead__title">{title}</h1>
        {children && <p className="pagehead__lead">{children}</p>}
      </div>
    </header>
  );
}
