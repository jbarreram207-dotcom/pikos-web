/* Íconos y formas decorativas propias (SVG inline, heredan color con currentColor). */
const base = { viewBox: '0 0 24 24', 'aria-hidden': true, focusable: false };

export const Flame = (p) => (
  <svg {...base} fill="currentColor" {...p}>
    <path d="M12 1c1.2 4.4-3.2 6.6-3.2 11a3.9 3.9 0 0 0 7.8 0c0-2-.9-3.3-1.1-5.2 3.1 2.2 5.2 5.4 5.2 8.8a8.7 8.7 0 0 1-17.4 0C3.3 8.5 9 6.5 12 1Z" />
  </svg>
);

export const Bolt = (p) => (
  <svg {...base} fill="currentColor" {...p}>
    <path d="M13.5 1 4 13.2h6L8.6 23 20 9.8h-6.4L13.5 1Z" />
  </svg>
);

export const Drop = (p) => (
  <svg {...base} fill="currentColor" {...p}>
    <path d="M12 1.5C8.4 7.4 5 10.8 5 15a7 7 0 0 0 14 0c0-4.2-3.4-7.6-7-13.5Z" />
  </svg>
);

export const Arrow = (p) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M4 12h15M13 5.5 19.5 12 13 18.5" />
  </svg>
);

export const Close = (p) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" {...p}>
    <path d="M5 5l14 14M19 5 5 19" />
  </svg>
);

export const Pin = (p) => (
  <svg {...base} fill="currentColor" {...p}>
    <path d="M12 1.5a7.5 7.5 0 0 0-7.5 7.5c0 5.4 7.5 13.5 7.5 13.5S19.5 14.4 19.5 9A7.5 7.5 0 0 0 12 1.5Zm0 10.2a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Z" />
  </svg>
);
