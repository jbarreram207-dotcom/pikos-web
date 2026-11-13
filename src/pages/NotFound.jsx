import { Link, useLocation } from 'react-router-dom';
import usePageTitle from '../lib/usePageTitle';

export default function NotFound() {
  usePageTitle('Página no encontrada');
  const { pathname } = useLocation();
  return (
    <section className="view notfound wrap">
      <p className="marker pagehead__kicker">Uy…</p>
      <h1 className="display pagehead__title">404</h1>
      <p className="pagehead__lead">
        No existe la página <code className="notfound__path">{pathname}</code>. Mucho drama, poco crunch.
      </p>
      <div className="notfound__links">
        <Link to="/" className="btn">
          Ir al Inicio
        </Link>
        <Link to="/menu" className="btn btn--white">
          Ver menú
        </Link>
      </div>
    </section>
  );
}
