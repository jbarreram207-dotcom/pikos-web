/**
 * Ilustración decorativa del encabezado (lado derecho). SVG propio: nítido a cualquier tamaño.
 * variant "menu": llamas + chicken tenders + destellos · variant "promos": sello promocional + fuego + estrellas.
 */
const Sparkle = ({ x, y, s = 1, fill = 'var(--yellow)', r = 0 }) => (
  <path
    transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}
    d="M0 -20 C2 -6 6 -2 20 0 C6 2 2 6 0 20 C-2 6 -6 2 -20 0 C-6 -2 -2 -6 0 -20Z"
    fill={fill}
    stroke="var(--ink)"
    strokeWidth="2.5"
    strokeLinejoin="round"
  />
);
const Bolt = ({ x, y, s = 1, r = 0, fill = 'var(--yellow)' }) => (
  <path
    transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}
    d="M12 0 L0 20 H9 L5 36 L22 12 H12 Z"
    fill={fill}
    stroke="var(--ink)"
    strokeWidth="2.5"
    strokeLinejoin="round"
  />
);
const Flame = ({ x, y, s = 1, r = 0, fill, stroke = 'none', inner }) => (
  <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
    <path
      d="M50 2 C58 28 88 44 88 84 C88 114 72 138 50 138 C28 138 12 114 12 84 C12 66 22 56 30 44 C32 58 38 64 44 62 C40 44 42 24 50 2Z"
      fill={fill}
      stroke={stroke}
      strokeWidth="4"
      strokeLinejoin="round"
    />
    {inner && (
      <path
        d="M50 62 C56 78 70 84 70 102 C70 118 62 128 50 128 C38 128 30 118 30 102 C30 92 36 88 40 80 C42 88 46 90 48 88 C46 78 46 70 50 62Z"
        fill={inner}
      />
    )}
  </g>
);
const Tender = ({ x, y, r = 0, s = 1 }) => (
  <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s} ${s * 0.78})`}>
    <path
      d="M6 44 C0 22 20 6 46 8 L146 16 C176 18 190 40 174 58 C164 70 148 74 126 76 L44 82 C20 84 10 64 6 44Z"
      fill="#f0a31f"
      stroke="var(--ink)"
      strokeWidth="5"
      strokeLinejoin="round"
    />
    <path d="M22 30 C40 20 80 22 120 28" fill="none" stroke="#ffd96b" strokeWidth="6" strokeLinecap="round" />
    {[[40, 52], [64, 40], [92, 56], [118, 42], [144, 54], [76, 66], [108, 66], [30, 44]].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r={i % 2 ? 3.4 : 2.6} fill="#b8680f" />
    ))}
  </g>
);

export default function PageArt({ variant = 'menu' }) {
  return (
    <svg className={`pageart pageart--${variant}`} viewBox="0 0 520 260" preserveAspectRatio="xMaxYMid meet" aria-hidden="true" focusable="false">
      {/* Mancha oscura de fondo */}
      <path
        d="M70 128 C60 60 150 12 250 24 C350 8 470 36 496 116 C520 190 440 244 330 238 C230 252 90 228 70 128Z"
        fill="var(--red-3)"
      />
      {variant === 'menu' ? (
        <>
          <Flame x={296} y={14} s={1.5} fill="#7e0c0c" />
          <Flame x={400} y={52} s={1.2} r={8} fill="var(--yellow)" stroke="var(--ink)" inner="var(--red)" />
          <Flame x={120} y={96} s={0.9} r={-12} fill="#9c1010" />
          <Tender x={116} y={134} r={-14} s={1.05} />
          <Tender x={244} y={160} r={6} s={0.95} />
          <Sparkle x={86} y={60} s={1.1} />
          <Sparkle x={470} y={196} s={0.8} fill="var(--white)" r={12} />
          <Sparkle x={248} y={44} s={0.7} fill="var(--white)" />
          <Bolt x={462} y={80} s={1.1} r={14} />
          <Bolt x={52} y={176} s={0.9} r={-16} fill="var(--white)" />
        </>
      ) : (
        <>
          <Flame x={70} y={80} s={1.2} r={-10} fill="#9c1010" />
          <Flame x={398} y={30} s={1.4} r={10} fill="var(--yellow)" stroke="var(--ink)" inner="var(--red)" />
          {/* Sello promocional */}
          <g transform="translate(250 130) rotate(-9)">
            <path
              d={(() => {
                const pts = [];
                for (let i = 0; i < 24; i += 1) {
                  const ang = (Math.PI * 2 * i) / 24;
                  const rad = i % 2 ? 78 : 98;
                  pts.push(`${i ? 'L' : 'M'}${(Math.cos(ang) * rad).toFixed(1)} ${(Math.sin(ang) * rad).toFixed(1)}`);
                }
                return `${pts.join('')}Z`;
              })()}
              fill="var(--white)"
              stroke="var(--ink)"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            <text textAnchor="middle" y="-6" className="pageart__big">¡PIDE</text>
            <text textAnchor="middle" y="40" className="pageart__big pageart__big--r">YA!</text>
          </g>
          <Tender x={330} y={170} r={-10} s={0.62} />
          <Sparkle x={96} y={44} s={1.1} />
          <Sparkle x={468} y={176} s={0.9} fill="var(--white)" r={12} />
          <Sparkle x={420} y={116} s={0.6} />
          <Bolt x={40} y={170} s={1} r={-12} />
          <Bolt x={170} y={20} s={0.8} r={16} fill="var(--white)" />
        </>
      )}
    </svg>
  );
}
