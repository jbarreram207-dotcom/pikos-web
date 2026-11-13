import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useOrder } from '../context';
import { INSTAGRAM_URL } from '../data/delivery';

export default function Footer() {
  const { open } = useOrder();
  return (
    <footer className="footer">
      <div className="wrap footer__in">
        <div className="footer__brand">
          <Logo />
          <p className="marker footer__tag">Less drama. More crunch.</p>
        </div>

        <nav className="footer__nav" aria-label="Pie de página">
          <Link to="/">Inicio</Link>
          <Link to="/promos">Promos</Link>
          <Link to="/menu">Menú</Link>
          <Link to="/ubicaciones">Ubicaciones</Link>
          <Link to="/eventos">Eventos</Link>
        </nav>

        <div className="footer__cta">
          <button type="button" className="btn" onClick={open}>
            Ordenar pedido
          </button>
          <a className="footer__ig" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            Instagram @pikos.gt
          </a>
        </div>
      </div>
      <p className="wrap footer__legal">© {new Date().getFullYear()} Píkos Guatemala</p>
    </footer>
  );
}
