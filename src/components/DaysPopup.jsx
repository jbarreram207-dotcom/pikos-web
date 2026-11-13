import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useApp, useOrder } from '../context';
import { getAsset } from '../lib/assets';
import { Arrow, Close } from './Icons';

const KEY = 'pikos:days-popup-seen';
const seen = () => {
  try {
    return !!sessionStorage.getItem(KEY);
  } catch {
    return false;
  }
};

/**
 * Popup de Píkos Days: aparece una vez por sesión al entrar a Inicio (después de la pantalla de carga).
 * No se vuelve a mostrar al cambiar de sección. Cierra con X, Esc o clic fuera.
 */
export default function DaysPopup() {
  const { pathname } = useLocation();
  const { ready } = useApp();
  const { open: openOrder, isOpen: orderOpen } = useOrder();
  const [show, setShow] = useState(false);
  const panel = useRef(null);
  const shown = useRef(false);
  const img = getAsset('promos/pikos-days');

  useEffect(() => {
    if (shown.current || !ready || pathname !== '/' || seen()) return undefined;
    const t = setTimeout(() => {
      shown.current = true;
      try {
        sessionStorage.setItem(KEY, '1');
      } catch {
        /* sin storage: solo se muestra una vez mientras la app siga abierta */
      }
      setShow(true);
    }, 900);
    return () => clearTimeout(t);
  }, [ready, pathname]);

  const close = useCallback(() => setShow(false), []);

  useEffect(() => {
    if (!show) return undefined;
    const prevFocus = document.activeElement;
    document.body.classList.add('no-scroll');
    panel.current?.querySelector('.days__close')?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'Tab' && panel.current) {
        const f = panel.current.querySelectorAll('a[href],button:not([disabled])');
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('no-scroll');
      prevFocus?.focus?.();
    };
  }, [show, close]);

  if (!show || orderOpen) return null;

  return (
    <div className="days" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div className="days__panel" role="dialog" aria-modal="true" aria-labelledby="days-title" ref={panel}>
        <button type="button" className="days__close" aria-label="Cerrar" onClick={close}>
          <Close />
        </button>
        {img && <img className="days__img" src={img} alt="Píkos Days: combo Q40, martes y jueves" />}
        <div className="days__copy">
          <p className="marker days__tag">Martes y jueves</p>
          <h2 id="days-title" className="display days__title">Píkos Days · Q40</h2>
          <p className="days__desc">4 tenders + 1 papa mediana + 1 bebida de 355 ml.</p>
          <p className="days__note">Aplican restricciones. Válido solo martes y jueves.</p>
          <button
            type="button"
            className="btn btn--xl"
            onClick={() => {
              close();
              openOrder();
            }}
          >
            Ordenar
            <Arrow className="btn__ico" />
          </button>
        </div>
      </div>
    </div>
  );
}
