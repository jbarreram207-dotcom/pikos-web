import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '@fontsource/anton/400.css';
import '@fontsource/caveat-brush/400.css';
import '@fontsource/archivo/400.css';
import '@fontsource/archivo/600.css';
import '@fontsource/archivo/800.css';

import './styles/global.css';
import './styles/layout.css';
import './styles/home.css';
import './styles/hero.css';
import './styles/pages.css';
import './styles/views.css';
import './styles/menu.css';
import './styles/promos.css';
import './styles/decor.css';

import App from './App.jsx';

/*
 * Ruteo robusto:
 *  - "/index.html" (p. ej. al abrir con un servidor estático o Live Server) se normaliza a "/".
 *  - El router respeta la base configurada en vite.config.js.
 *  - Los parámetros (?utm_source=…) no afectan a la ruta: "/?utm_source=x" es Inicio.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
if (/\/index\.html$/.test(window.location.pathname)) {
  const clean = window.location.pathname.replace(/index\.html$/, '') || '/';
  window.history.replaceState(null, '', clean + window.location.search + window.location.hash);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={base || '/'}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
