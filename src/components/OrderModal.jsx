import { useEffect, useMemo, useRef, useState } from 'react';
import { useOrder } from '../context';
import { platforms } from '../data/delivery';
import PlatformLogo from './PlatformLogo';
import { Arrow, Close } from './Icons';

/** Quita acentos y mayúsculas para que el buscador encuentre "Roosevelt", "zona 14", "majadas"… */
const norm = (t) => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

/**
 * Modal "Ordenar pedido": elige la app (Uber Eats / PedidosYa) y luego la sucursal.
 * Lista compacta con scroll interno y buscador; cada fila abre la ficha de esa sucursal en la app.
 * Sin carrito propio.
 */
export default function OrderModal() {
  const { isOpen, close } = useOrder();
  const panel = useRef(null);
  const lastFocus = useRef(null);
  const [tab, setTab] = useState(platforms[0].id);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (isOpen) setQuery('');
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    lastFocus.current = document.activeElement;
    document.body.classList.add('no-scroll');
    panel.current?.querySelector('.modal__close')?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'Tab' && panel.current) {
        const f = panel.current.querySelectorAll('a[href],button:not([disabled]),input');
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('no-scroll');
      lastFocus.current?.focus?.();
    };
  }, [isOpen, close]);

  const current = platforms.find((p) => p.id === tab) ?? platforms[0];
  const stores = useMemo(() => {
    const q = norm(query.trim());
    if (!q) return current.stores;
    return current.stores.filter((s) => norm(`${s.label} ${s.area}`).includes(q));
  }, [current, query]);

  if (!isOpen) return null;

  return (
    <div className="modal" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div className="modal__panel modal__panel--order" role="dialog" aria-modal="true" aria-labelledby="order-title" ref={panel}>
        <button type="button" className="modal__close" aria-label="Cerrar" onClick={close}>
          <Close />
        </button>

        <p className="marker modal__kicker">¿Con hambre?</p>
        <h2 id="order-title" className="display modal__title">
          Ordenar pedido
        </h2>
        <p className="modal__sub">Elige tu app y tu sucursal. Se abre en una pestaña nueva.</p>

        <div className="ordertabs" role="tablist" aria-label="Plataforma de delivery">
          {platforms.map((p) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              id={`tab-${p.id}`}
              aria-selected={p.id === current.id}
              aria-controls="order-list"
              className={`ordertab ${p.id === current.id ? 'is-on' : ''}`}
              onClick={() => setTab(p.id)}
            >
              <span className="ordertab__logo">
                <PlatformLogo id={p.id} name={p.name} />
              </span>
              <span className="ordertab__n">{p.stores.length} sucursales</span>
            </button>
          ))}
        </div>

        <div className="orderbox">
          <label className="ordersearch">
            <span className="sr-only">Buscar sucursal</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar sucursal"
              autoComplete="off"
              enterKeyHint="search"
            />
          </label>

          <ul className="storelist" id="order-list" role="tabpanel" aria-labelledby={`tab-${current.id}`}>
            {stores.map((s) => (
              <li key={s.url}>
                <a className="store" href={s.url} target="_blank" rel="noopener noreferrer">
                  <span className="store__txt">
                    <strong className="store__name">{s.label}</strong>
                    <span className="store__area">{s.area}</span>
                  </span>
                  <span className="store__go" aria-hidden="true">
                    <Arrow />
                  </span>
                  <span className="sr-only"> — pedir por {current.name}</span>
                </a>
              </li>
            ))}
            {stores.length === 0 && <li className="storelist__empty">No encontramos esa sucursal en {current.name}.</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}
