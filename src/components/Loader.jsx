import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { getAsset } from '../lib/assets';
import { Bolt } from './Icons';

/**
 * Pantalla de carga de marca (solo la primera vez por sesión, ~1.4 s en total):
 * logo entra con escala, un trazo amarillo lo subraya, pulso breve y los paneles suben
 * revelando el Inicio. `onReveal` se llama cuando empieza la salida (el hero arranca ahí),
 * `onDone` cuando ya se puede desmontar.
 */
export default function Loader({ onReveal, onDone }) {
  const root = useRef(null);
  const logoSrc = getAsset('brand/logo');

  useEffect(() => {
    document.body.classList.add('no-scroll');
    let revealed = false;
    let finished = false;
    const reveal = () => {
      if (!revealed) {
        revealed = true;
        onReveal();
      }
    };
    const finish = () => {
      if (!finished) {
        finished = true;
        document.body.classList.remove('no-scroll');
        onDone();
      }
    };

    let tl;
    let cancelled = false;
    const ctx = gsap.context(() => {
      // No esperamos más de 600 ms por las fuentes: no se retrasa artificialmente.
      const fontsReady = document.fonts?.ready ?? Promise.resolve();
      Promise.race([fontsReady, new Promise((r) => setTimeout(r, 600))]).then(() => {
        if (cancelled || !root.current) return;
        tl = gsap.timeline({ onComplete: finish });
        tl.from('.loader__logo', { scale: 0.45, rotate: -8, opacity: 0, duration: 0.45, ease: 'back.out(2.2)' })
          .from('.loader__bolt', { scale: 0, rotate: -40, duration: 0.3, stagger: 0.08, ease: 'back.out(3)' }, '-=0.25')
          .to('.loader__bar', { scaleX: 1, duration: 0.35, ease: 'power3.out' }, '-=0.3')
          .to('.loader__logo', { scale: 1.07, duration: 0.12, yoyo: true, repeat: 1, ease: 'power1.inOut' })
          .add(reveal)
          .to('.loader__front', { yPercent: -100, duration: 0.55, ease: 'power4.inOut' })
          .to('.loader__back', { yPercent: -100, duration: 0.5, ease: 'power4.inOut' }, '-=0.45');
      });
    }, root);

    return () => {
      cancelled = true;
      tl?.kill();
      ctx.revert();
      document.body.classList.remove('no-scroll');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="loader" ref={root} role="status" aria-label="Cargando Píkos">
      <div className="loader__back" />
      <div className="loader__front">
        <div className="loader__logo">
          {logoSrc ? (
            <img src={logoSrc} alt="Píkos" />
          ) : (
            <span className="loader__text" aria-hidden="true">
              PÍKOS
            </span>
          )}
          <i className="loader__bar" aria-hidden="true" />
          <Bolt className="loader__bolt loader__bolt--l" />
          <Bolt className="loader__bolt loader__bolt--r" />
        </div>
      </div>
    </div>
  );
}
