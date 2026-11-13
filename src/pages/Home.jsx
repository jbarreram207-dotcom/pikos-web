import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

import { useApp, useOrder } from '../context';
import usePrefersReducedMotion from '../lib/usePrefersReducedMotion';
import usePageTitle from '../lib/usePageTitle';

import Photo from '../components/Photo';
import Burst from '../components/Burst';
import Marquee from '../components/Marquee';
import Reveal from '../components/Reveal';
import PromoCard from '../components/PromoCard';
import DecoPhoto from '../components/DecoPhoto';
import { Arrow, Bolt, Drop, Flame, Pin } from '../components/Icons';

import { promos } from '../data/promos';
import { locations, directionsLink } from '../data/locations';
import { categories } from '../data/categories';

export default function Home() {
  usePageTitle('');
  const { ready } = useApp();
  const { open } = useOrder();
  const reduce = usePrefersReducedMotion();
  const hero = useRef(null);

  /* Entrada del hero: una timeline corta (~1.2 s). Espera a la pantalla de carga si existe. */
  useEffect(() => {
    if (!ready || reduce || !hero.current) return undefined;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1, defaults: { ease: 'power4.out' } });
      tl.from('.hero__bgword', { yPercent: 30, opacity: 0, duration: 0.9 })
        .from('.strip', { xPercent: -130, duration: 0.75, stagger: 0.12 }, '<0.05')
        .from('.hero__burst', { scale: 0.2, rotate: -50, opacity: 0, duration: 0.85, ease: 'back.out(1.4)', clearProps: 'transform' }, '-=0.55')
        .from('.hero__product', { y: 70, scale: 0.82, opacity: 0, duration: 0.8, clearProps: 'transform' }, '-=0.6')
        .from('.hero .sticker', { scale: 0, rotate: -30, duration: 0.5, stagger: 0.12, ease: 'back.out(2.2)' }, '-=0.35')
        .from('.hero [data-fade]', { y: 18, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.7');
    }, hero);
    return () => ctx.revert();
  }, [ready, reduce]);

  return (
    <div className="view home">
      {/* ================= HERO ================= */}
      <section className="hero" ref={hero}>
        <p className="hero__bgword" aria-hidden="true">
          Crunch
        </p>
        <div className="hero__deco" aria-hidden="true">
          <Flame className="deco deco--flame" />
          <Bolt className="deco deco--bolt" />
          <Drop className="deco deco--drop" />
        </div>

        <div className="wrap hero__grid">
          <div className="hero__copy">
            <p className="hero__kicker" data-fade>
              <span className="label-black marker">Tenders · Crunchers · Sándwiches</span>
            </p>

            <h1 className="hero__title">
              <span className="strip strip--a">Less drama.</span>
              <span className="strip strip--b">More crunch.</span>
            </h1>

            <p className="hero__lead marker" data-fade>
              El crunch tiene actitud.
            </p>

            <div className="hero__actions" data-fade>
              <button type="button" className="btn btn--xl" onClick={open}>
                Ordenar ahora
                <Arrow className="btn__ico" />
              </button>
              <Link to="/menu" className="btn btn--xl btn--white">
                Ver menú
              </Link>
            </div>
          </div>

          <div className="hero__stage">
            <Burst className="hero__burst" points={16} inner={0.88} />
            <div className="hero__product">
              <Photo src="hero/hero-sandwich-deluxe" label="Sandwich Deluxe de Píkos" cutout eager />
            </div>
            <Burst className="sticker sticker--a">
              More
              <br />
              Píkos
            </Burst>
            <p className="sticker sticker--b marker">Pide en Uber Eats y PedidosYa</p>
          </div>
        </div>
      </section>

      <Marquee />

      {/* ================= PROMOS (adelanto) ================= */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section__head">
            <div>
              <p className="marker section__kicker">Promos</p>
              <h2 className="display section__title">Combos para el crunch de hoy</h2>
            </div>
            <Link to="/promos" className="link-arrow">
              Ver todas las promos <Arrow />
            </Link>
          </Reveal>

          <div className="promo-grid">
            {promos.slice(0, 2).map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <PromoCard promo={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ELIGE TU CRUNCH (adelanto del menú) ================= */}
      <section className="section section--dark">
        <div className="wrap">
          <Reveal className="section__head">
            <div>
              <p className="marker section__kicker">Menú</p>
              <h2 className="display section__title">Elige tu crunch</h2>
            </div>
            <Link to="/menu" className="link-arrow">
              Ver el menú completo <Arrow />
            </Link>
          </Reveal>

          <div className="tiles">
            {['crunchers', 'tenders', 'individuales', 'snacks'].map((id) => categories.find((x) => x.id === id)).filter(Boolean).map((c, i) => (
              <Reveal key={c.id} delay={i * 70}>
                <Link to={`/menu?cat=${c.id}`} className="tile">
                  <span className="tile__n">0{i + 1}</span>
                  <span className="display tile__label">{c.short || c.label}</span>
                  <Arrow className="tile__arrow" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= UBICACIONES (acceso rápido) ================= */}
      <section className="section section--paper">
        <div className="wrap">
          <Reveal className="section__head">
            <div>
              <p className="marker section__kicker">Ubicaciones</p>
              <h2 className="display section__title">Encuentra tu Píkos</h2>
            </div>
            <Link to="/ubicaciones" className="link-arrow">
              Ver las {locations.length} sucursales <Arrow />
            </Link>
          </Reveal>

          <div className="quickloc">
            {locations.slice(0, 4).map((l, i) => (
              <Reveal key={l.id} delay={i * 80} className="quickloc__item">
                <Pin className="quickloc__pin" />
                <div className="quickloc__txt">
                  <h3 className="display quickloc__name">{l.name}</h3>
                  <p>{l.address}</p>
                </div>
                <a
                  className="btn btn--sm btn--ink"
                  href={directionsLink(l)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cómo llegar
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INVITACIÓN A PEDIR ================= */}
      <section className="cta">
        <div className="wrap cta__in">
          <Reveal>
            <h2 className="display cta__title">¿Antojo de crunch?</h2>
            <p className="cta__lead">Pídelo por Uber Eats o PedidosYa y listo.</p>
          </Reveal>
          <Reveal className="cta__decor" delay={60} aria-hidden="true">
            <DecoPhoto name="bbq" className="cta__ph cta__ph--a" rotate={-8} />
            <DecoPhoto name="crunchers" className="cta__ph cta__ph--b" rotate={6} />
            <DecoPhoto name="asian-zing" className="cta__ph cta__ph--c" rotate={-4} />
            <Flame className="cta__flame" />
            <Bolt className="cta__bolt" />
          </Reveal>
          <Reveal delay={120}>
            <button type="button" className="btn btn--ink btn--lg" onClick={open}>
              Ordenar pedido
              <Arrow className="btn__ico" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
