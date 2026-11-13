import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base '/' = el sitio vive en la raíz del dominio (localhost y Vercel).
// Si algún día se publica en una subcarpeta (ej. /pikos/), cambia base y el router lo respeta solo.
export default defineConfig({
  base: '/',
  plugins: [react()],
});
