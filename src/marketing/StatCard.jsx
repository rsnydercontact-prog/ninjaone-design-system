// NinjaOne marketing — proof-point stat card
// Oversized medium-blue figure, uppercase label, customer quote, attribution.
export function StatCard({ value, label, quote, source }) {
  return (
    <div style={{
      background:'var(--wash-mint-pale)',
      borderRadius:'var(--radius-doc)',
      padding:'var(--space-7) var(--space-6) var(--space-6)',
      fontFamily:'var(--font-sans)',
      display:'flex',
      flexDirection:'column',
      gap:'var(--space-2)',
    }}>
      <div style={{
        fontSize:'44px',
        fontWeight:'var(--fw-regular)',
        lineHeight:1,
        color:'var(--ninja-blue-medium)',
        letterSpacing:'var(--ls-tight)',
        fontVariantNumeric:'tabular-nums',
      }}>{value}</div>
      <div style={{
        fontSize:'var(--fs-overline)',
        fontWeight:'var(--fw-semibold)',
        letterSpacing:'var(--ls-overline)',
        textTransform:'uppercase',
        color:'var(--doc-text)',
      }}>{label}</div>
      {quote && (
        <p style={{
          margin:'var(--space-4) 0 0',
          fontSize:'var(--fs-small)',
          lineHeight:'var(--lh-normal)',
          color:'var(--doc-text)',
        }}>“{quote}”</p>
      )}
      {source && (
        <div style={{
          marginTop:'var(--space-3)',
          fontSize:'var(--fs-small)',
          fontWeight:'var(--fw-semibold)',
          color:'var(--doc-text)',
        }}>{source}</div>
      )}
    </div>
  );
}
