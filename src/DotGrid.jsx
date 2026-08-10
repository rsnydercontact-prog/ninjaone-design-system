// NinjaOne — dot grid motif
// The lattice of tinted dots on guide covers: mostly flat navy tints, a few
// cyan, and a handful of green-ringed nodes holding a shape. Reads as an
// endpoint fleet without ever saying so. Decorative — aria-hidden.
const SHAPES = {
  dot:      (cx, cy, r, fill) => <circle cx={cx} cy={cy} r={r * 0.42} fill={fill} />,
  triangle: (cx, cy, r, fill) => <path d={`M${cx} ${cy - r * 0.44} L${cx + r * 0.42} ${cy + r * 0.3} L${cx - r * 0.42} ${cy + r * 0.3} Z`} fill={fill} />,
  diamond:  (cx, cy, r, fill) => <path d={`M${cx} ${cy - r * 0.46} L${cx + r * 0.46} ${cy} L${cx} ${cy + r * 0.46} L${cx - r * 0.46} ${cy} Z`} fill={fill} />,
  caret:    (cx, cy, r, fill) => <path d={`M${cx - r * 0.42} ${cy - r * 0.28} L${cx + r * 0.42} ${cy - r * 0.28} L${cx} ${cy + r * 0.4} Z`} fill={fill} />,
};

// [column, row, kind] — kind: 'flat' | 'lit' | 'node:<shape>'
const DEFAULT_NODES = [
  [1, 0, 'node:dot'],
  [0, 1, 'lit'], [1, 1, 'node:triangle'], [2, 1, 'node:dot'], [4, 1, 'lit'],
  [2, 2, 'lit'], [4, 2, 'node:diamond'], [5, 2, 'node:dot'],
  [1, 3, 'node:dot'], [4, 3, 'node:caret'], [6, 3, 'lit'],
  [5, 4, 'lit'],
];

export function DotGrid({
  columns = 7,
  rows = 5,
  nodes = DEFAULT_NODES,
  flat = 'rgba(255,255,255,0.05)',
  lit = 'var(--ninja-blue-medium)',
  ring = 'var(--ninja-green)',
  shape = 'var(--ninja-green)',
  gridLine = 'rgba(255,255,255,0.06)',
  cell = 92,
}) {
  const r = cell * 0.34;
  const width = columns * cell;
  const height = rows * cell;
  const lookup = new Map(nodes.map(([c, row, kind]) => [`${c},${row}`, kind]));

  return (
    <svg aria-hidden="true" viewBox={`0 0 ${width} ${height}`} width="100%" style={{ display:'block' }} fill="none">
      {Array.from({ length: rows - 1 }, (_, i) => (
        <line key={`h${i}`} x1="0" x2={width} y1={(i + 1) * cell} y2={(i + 1) * cell} stroke={gridLine} strokeWidth="1" />
      ))}
      {Array.from({ length: columns - 1 }, (_, i) => (
        <line key={`v${i}`} x1={(i + 1) * cell} x2={(i + 1) * cell} y1="0" y2={height} stroke={gridLine} strokeWidth="1" />
      ))}
      {Array.from({ length: rows }, (_, row) =>
        Array.from({ length: columns }, (_, col) => {
          const cx = col * cell + cell / 2;
          const cy = row * cell + cell / 2;
          const kind = lookup.get(`${col},${row}`) ?? 'flat';
          if (kind === 'flat') return <circle key={`${col}-${row}`} cx={cx} cy={cy} r={r} fill={flat} />;
          if (kind === 'lit') return <circle key={`${col}-${row}`} cx={cx} cy={cy} r={r} fill={lit} />;
          const drawShape = SHAPES[kind.split(':')[1]] ?? SHAPES.dot;
          return (
            <g key={`${col}-${row}`}>
              <circle cx={cx} cy={cy} r={r} fill="none" stroke={ring} strokeWidth="2" />
              {drawShape(cx, cy, r, shape)}
            </g>
          );
        })
      )}
    </svg>
  );
}
