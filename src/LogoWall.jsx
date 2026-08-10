// NinjaOne — integrations logo wall
// Neutral panel, white rounded tiles, caption under each. Partner marks are
// supplied by the caller — the kit ships none of them.
export function LogoWall({ title, logos, columns = 5, footnote }) {
  return (
    <section style={{
      background:'var(--mist-6)',
      borderRadius:'var(--radius-doc)',
      padding:'var(--space-7)',
      display:'grid',
      gridTemplateColumns:'minmax(160px, 1fr) 3fr',
      gap:'var(--space-7)',
      alignItems:'start',
      fontFamily:'var(--font-sans)',
    }}>
      <div>
        {title && (
          <h3 style={{
            margin:0,
            fontSize:'var(--fs-h3)',
            fontWeight:'var(--fw-semibold)',
            lineHeight:'var(--lh-snug)',
            color:'var(--doc-subheading)',
          }}>{title}</h3>
        )}
        {footnote && (
          <div style={{ marginTop:'var(--space-5)', fontSize:'var(--fs-caption)', fontWeight:'var(--fw-semibold)', color:'var(--doc-subheading)' }}>
            {footnote}
          </div>
        )}
      </div>

      <div style={{ display:'grid', gridTemplateColumns:`repeat(${columns}, minmax(0, 1fr))`, gap:'var(--space-5) var(--space-4)' }}>
        {logos.map(logo => (
          <div key={logo.name} style={{ textAlign:'center' }}>
            <div style={{
              width:64, height:64, margin:'0 auto',
              background:'var(--paper)',
              borderRadius:'var(--radius-lg)',
              display:'flex', alignItems:'center', justifyContent:'center',
              overflow:'hidden',
            }}>
              {logo.src
                ? <img src={logo.src} alt={logo.name} style={{ maxWidth:'62%', maxHeight:'62%' }} />
                : <span style={{ fontSize:'var(--fs-h3)', fontWeight:'var(--fw-bold)', color:'var(--mist-3)' }}>{logo.name.charAt(0)}</span>}
            </div>
            <div style={{ marginTop:'var(--space-2)', fontSize:'var(--fs-caption)', fontWeight:'var(--fw-medium)', color:'var(--doc-text)' }}>
              {logo.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
