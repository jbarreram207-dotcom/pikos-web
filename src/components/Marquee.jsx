import { useEffect, useRef } from 'react';
import { Bolt } from './Icons';
import usePrefersReducedMotion from '../lib/usePrefersReducedMotion';

const WORDS = ['More crunch', 'Less rules', 'More Píkos'];

/**
 * Banda con textos de marca. Solo se mueve cuando el usuario hace scroll
 * (no hay movimiento constante): el desplazamiento depende del scroll.
 */
export default function Marquee() {
  const track = useRef(null);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    const el = track.current;
    if (!el || reduce) return undefined;
    let x = 0;
    let last = window.scrollY;
    let raf = 0;

    const apply = () => {
      raf = 0;
      const half = el.scrollWidth / 2;
      x = ((x % half) - half) % half;
      el.style.transform = `translate3d(${Math.round(x)}px,0,0)`;
    };
    const onScroll = () => {
      const y = window.scrollY;
      x -= (y - last) * 0.45;
      last = y;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduce]);

  const group = (k) => (
    <div className="marquee__group" key={k} aria-hidden={k === 1 ? 'true' : undefined}>
      {[...WORDS, ...WORDS].map((w, i) => (
        <span className="marquee__item" key={i}>
          {w}
          <Bolt className="marquee__bolt" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee" role="presentation">
      <div className="marquee__track" ref={track}>
        {group(0)}
        {group(1)}
      </div>
    </div>
  );
}
