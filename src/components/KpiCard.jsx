// NinjaOne RMM — KPI Card
export function KpiCard({ label, value, delta, deltaKind = 'ok', sub, sparkline, accent }) {
  const deltaColor = { ok:'#04FF88', warn:'#F39500', danger:'#FF7A7E', neutral:'#8FA8B8' }[deltaKind];
  const gradientId = `spark-${String(label).replace(/\W+/g, '-')}`;
  return (
    <div style={{
      padding:18, background:'#08243B',
      border:'1px solid rgba(255,255,255,0.08)',
      borderRadius:8, boxShadow:'0 1px 2px rgba(4,17,29,0.4)',
      fontFamily:'Inter, sans-serif',
    }}>
      <div style={{ fontSize:11, fontWeight:600, color:'#8FA8B8', textTransform:'uppercase', letterSpacing:'0.08em' }}>{label}</div>
      <div style={{ display:'flex', alignItems:'baseline', gap:10, marginTop:8 }}>
        <div style={{
          fontSize:32, fontWeight:700, color: accent === 'gradient' ? 'transparent' : '#fff',
          letterSpacing:'-0.02em', fontVariantNumeric:'tabular-nums',
          ...(accent === 'gradient' ? { background:'linear-gradient(90deg,#04FF88,#55EBFF)', WebkitBackgroundClip:'text', backgroundClip:'text' } : {})
        }}>{value}</div>
        {delta && <div style={{ color: deltaColor, fontSize:13, fontWeight:600 }}>{delta}</div>}
      </div>
      {sub && <div style={{ fontSize:12, color:'#8FA8B8', marginTop:4 }}>{sub}</div>}
      {sparkline && (
        <div style={{ marginTop:12, height:32 }}>
          <svg viewBox="0 0 200 32" width="100%" height="32" preserveAspectRatio="none">
            <defs>
              <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#04FF88" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#04FF88" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={sparkline.area} fill={`url(#${gradientId})`} />
            <path d={sparkline.line} fill="none" stroke="#04FF88" strokeWidth="1.5" />
          </svg>
        </div>
      )}
    </div>
  );
}
