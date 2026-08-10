// NinjaOne RMM — Pill (status badge)
export function Pill({ kind = 'neutral', children, dot = true }) {
  const palette = {
    ok:      { bg: 'rgba(0,170,95,0.16)',  fg: '#3DDB95', dot: '#00AA5F' },
    info:    { bg: 'rgba(0,125,165,0.22)', fg: '#5BC9F0', dot: '#007DA5' },
    warn:    { bg: 'rgba(243,149,0,0.18)', fg: '#F8B23F', dot: '#F39500' },
    danger:  { bg: 'rgba(229,72,77,0.20)', fg: '#FF7A7E', dot: '#E5484D' },
    neutral: { bg: 'rgba(143,168,184,0.16)', fg: '#B8C8D2', dot: '#8FA8B8' },
    brand:   { bg: 'rgba(4,255,136,0.16)',   fg: '#04FF88', dot: '#04FF88' },
  }[kind];
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap:6,
      padding:'3px 10px', borderRadius:999,
      fontSize:12, fontWeight:600,
      background: palette.bg, color: palette.fg,
      letterSpacing:'-0.005em',
    }}>
      {dot && <span style={{ width:6, height:6, borderRadius:'50%', background: palette.dot }} />}
      {children}
    </span>
  );
}
