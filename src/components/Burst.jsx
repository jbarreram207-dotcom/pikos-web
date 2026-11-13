/** Sello tipo "estrella" (como los badges DELUXE / CLASSIC). El color se controla con --burst. */
export default function Burst({ children, className = '', points = 14, inner = 0.84 }) {
  const n = points * 2;
  const pts = Array.from({ length: n }, (_, i) => {
    const r = i % 2 ? inner * 50 : 50;
    const a = (Math.PI * 2 * i) / n - Math.PI / 2;
    return `${(50 + r * Math.cos(a)).toFixed(1)},${(50 + r * Math.sin(a)).toFixed(1)}`;
  }).join(' ');

  return (
    <div className={`burst ${className}`}>
      <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        <polygon points={pts} />
      </svg>
      <span className="burst__txt">{children}</span>
    </div>
  );
}
