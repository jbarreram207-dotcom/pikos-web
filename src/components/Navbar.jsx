import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { useOrder } from '../context';
import { INSTAGRAM_URL } from '../data/delivery';

const LINKS = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/promos', label: 'Promos' },
  { to: '/menu', label: 'Menú' },
  { to: '/ubicaciones', label: 'Ubicaciones' },
  { to: '/eventos', label: 'Eventos' },
];

export default function Navbar() {
  const { open: openOrder } = useOrder();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen);
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const handleOrder = () => {
    setMenuOpen(false);
    openOrder();
  };

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="wrap nav__in">
          <Logo />

          <nav className="nav__links" aria-label="Principal">
            {LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className="nav__link">
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav__right">
            <button type="button" className="btn btn--sm nav__cta" onClick={handleOrder}>
              Ordenar pedido
            </button>
            <button
              type="button"
              className={`burger ${menuOpen ? 'is-open' : ''}`}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mmenu ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mmenu__nav" aria-label="Menú móvil">
          {LINKS.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className="mmenu__link"
              style={{ '--i': i }}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span className="mmenu__n">0{i + 1}</span>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          className="btn btn--white mmenu__cta"
          style={{ '--i': LINKS.length }}
          onClick={handleOrder}
          tabIndex={menuOpen ? 0 : -1}
        >
          Ordenar pedido
        </button>
        <p className="marker mmenu__foot">
          Less drama. More crunch.
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" tabIndex={menuOpen ? 0 : -1}>
            @pikos.gt
          </a>
        </p>
      </div>
    </>
  );
}
