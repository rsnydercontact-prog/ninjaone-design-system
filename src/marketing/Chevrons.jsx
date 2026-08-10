// NinjaOne marketing — chevron motif
// The ">>>" mark that sits behind hero headlines on every 2025 datasheet.
// Decorative only: aria-hidden, never carries meaning.
export function Chevrons({ color = 'var(--mist-3)', height = 96, count = 3, opacity = 1 }) {
  const w = height * 0.62;
  return (
    <svg
      aria-hidden="true"
      height={height}
      width={w * count * 0.72}
      viewBox={`0 0 ${100 * count * 0.72} 100`}
      style={{ opacity, flexShrink: 0 }}
      fill="none"
    >
      {Array.from({ length: count }, (_, i) => (
        <path
          key={i}
          d={`M${i * 72} 4 L${i * 72 + 46} 50 L${i * 72} 96 L${i * 72 + 26} 96 L${i * 72 + 72} 50 L${i * 72 + 26} 4 Z`}
          fill={color}
        />
      ))}
    </svg>
  );
}
