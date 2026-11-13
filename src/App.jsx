import { useLayoutEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import gsap from 'gsap';

import { AppProvider, OrderProvider } from './context';
import usePrefersReducedMotion from './lib/usePrefersReducedMotion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import DaysPopup from './components/DaysPopup';

import Loader from './components/Loader';

import Home from './pages/Home';
import Promos from './pages/Promos';
import Menu from './pages/Menu';
import Ubicaciones from './pages/Ubicaciones';
import Eventos from './pages/Eventos';
import NotFound from './pages/NotFound';

/**
 * Cambio de vista INSTANTÁNEO: al navegar, la nueva sección se muestra de inmediato (sin barridos,
 * pantallas intermedias ni retrasos). Solo se vuelve arriba del todo y se anima la entrada del
 * encabezado de la nueva vista (microanimación de textos; se omite con movimiento reducido).
 */
function AnimatedRoutes() {
  const location = useLocation();
  const main = useRef(null);
  const reduce = usePrefersReducedMotion();

  /* Al cambiar de sección: arriba del todo, al instante (los cambios de query/hash no mueven el scroll) */
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  /* ----- Entrada del contenido de la nueva vista (encabezado, títulos) ----- */
  useLayoutEffect(() => {
    if (reduce || !main.current) return undefined;
    const ctx = gsap.context(() => {
      const head = main.current.querySelectorAll('.pagehead__copy > *');
      if (head.length) {
        gsap.from(head, {
          y: 34,
          opacity: 0,
          duration: 0.55,
          stagger: 0.07,
          ease: 'power4.out',
          clearProps: 'transform,opacity',
        });
      }
      const title = main.current.querySelector('.pagehead__title');
      if (title) {
        gsap.from(title, { skewX: -14, xPercent: -6, duration: 0.65, ease: 'power4.out', clearProps: 'transform' });
      }
    }, main);
    return () => ctx.revert();
  }, [location.pathname, reduce]);

  return (
    <main className="page" id="contenido" ref={main}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/promos" element={<Promos />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/ubicaciones" element={<Ubicaciones />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
}

const INTRO_KEY = 'pikos:intro-seen';

/** La pantalla de carga solo aparece la primera vez de cada sesión y nunca con movimiento reducido. */
function shouldShowIntro() {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    return !sessionStorage.getItem(INTRO_KEY);
  } catch {
    return true;
  }
}

export default function App() {
  const [intro] = useState(shouldShowIntro);
  const [ready, setReady] = useState(!intro);
  const [loaderGone, setLoaderGone] = useState(!intro);

  const handleDone = () => {
    try {
      sessionStorage.setItem(INTRO_KEY, '1');
    } catch {
      /* sin storage: la pantalla de carga puede repetirse al recargar, no al navegar */
    }
    setLoaderGone(true);
  };

  return (
    <AppProvider ready={ready}>
      <OrderProvider>
        <a className="skip" href="#contenido">
          Saltar al contenido
        </a>
        <Navbar />
        <AnimatedRoutes />
        <OrderModal />
        <DaysPopup />
        {!loaderGone && <Loader onReveal={() => setReady(true)} onDone={handleDone} />}
      </OrderProvider>
    </AppProvider>
  );
}
