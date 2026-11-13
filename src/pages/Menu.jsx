import { useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import PageHead from '../components/PageHead';
import Photo from '../components/Photo';
import Burst from '../components/Burst';
import usePageTitle from '../lib/usePageTitle';
import usePrefersReducedMotion from '../lib/usePrefersReducedMotion';
import { useOrder } from '../context';
import { categories } from '../data/categories';
import { menu } from '../data/menu';

const THEMES = ['yellow', 'white', 'ink', 'dark'];

export default function Menu() {
  usePageTitle('Menú');
  const { open } = useOrder();
  const reduce = usePrefersReducedMotion();
  const [params, setParams] = useSearchParams();
  const tabsRef = useRef(null);

  // Se muestran todas las categorías (las vacías enseñan "Pronto").
  const cats = categories;
  const requested = params.get('cat');
  const active = cats.some((c) => c.id === requested) ? requested : cats[0]?.id;
  const items = menu.filter((m) => m.category === active || (active === 'promociones' && m.promo));

  // Mantiene visible la pestaña activa en la barra horizontal (móvil)
  useEffect(() => {
    const el = tabsRef.current?.querySelector('[aria-selected="true"]');
    el?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: reduce ? 'auto' : 'smooth' });
  }, [active, reduce]);

  const select = (id) => setParams({ cat: id }, { replace: true });

  const onKeyDown = (e) => {
    const i = cats.findIndex((c) => c.id === active);
    let next = null;
    if (e.key === 'ArrowRight') next = cats[(i + 1) % cats.length];
    if (e.key === 'ArrowLeft') next = cats[(i - 1 + cats.length) % cats.length];
    if (next) {
      e.preventDefault();
      select(next.id);
      tabsRef.current?.querySelector(`#tab-${next.id}`)?.focus();
    }
  };

  const activeLabel = cats.find((c) => c.id === active)?.label;

  return (
    <section className="view">
      <PageHead kicker="Elige tu crunch" title="Menú" art="menu">
        Filtra por categoría y pide por delivery.
      </PageHead>

      <div className="tabs" role="tablist" aria-label="Categorías del menú" ref={tabsRef} onKeyDown={onKeyDown}>
        <div className="wrap tabs__in">
          {cats.map((c) => (
            <button
              key={c.id}
              id={`tab-${c.id}`}
              type="button"
              role="tab"
              aria-selected={c.id === active}
              aria-controls="menu-panel"
              tabIndex={c.id === active ? 0 : -1}
              className="tab"
              onClick={() => select(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="wrap menu" id="menu-panel" role="tabpanel" aria-labelledby={`tab-${active}`}>
        {items.length === 0 ? (
          <div className="empty">
            <p className="display empty__title">Pronto</p>
            <p>
              {active === 'promociones' ? (
                <>
                  Mira todas las promos en <Link to="/promos">Promos</Link>.
                </>
              ) : (
                'Estamos preparando esta categoría.'
              )}
            </p>
          </div>
        ) : (
          <>
            <p className="menu__cat display" aria-hidden="true" key={`t-${active}`}>
              {activeLabel}
            </p>
            <div className="dishes" key={active}>
              {items.map((it, i) => {
                return (
                  <article
                    className={`dish dish--${THEMES[i % THEMES.length]} ${it.lowres ? 'dish--small' : ''}`}
                    key={it.id}
                    style={{ '--i': i }}
                  >
                    <span className="dish__no display" aria-hidden="true">
                      0{i + 1}
                    </span>

                    <div className="dish__media">
                      <span className="dish__blob" aria-hidden="true" />
                      <div className="dish__photo">
                        <Photo src={`products/${it.id}`} label={it.name} cutout />
                      </div>
                      {it.price != null && (
                        <Burst className="dish__price" points={12}>
                          Q{it.price}
                        </Burst>
                      )}
                    </div>

                    <div className="dish__body">
                      <h2 className="display dish__name">{it.name}</h2>
                      <p className="dish__desc">{it.description}</p>
                      {import.meta.env.DEV && it.pending && <p className="dish__pending">Descripción por confirmar</p>}
                      <button type="button" className="btn dish__btn" onClick={open}>
                        Ordenar
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
