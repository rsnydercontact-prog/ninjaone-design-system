// NinjaOne marketing — pull quote
// Italic navy quote with a role/company attribution set in uppercase.
export function PullQuote({ quote, role, company }) {
  return (
    <figure style={{ margin:0, fontFamily:'var(--font-sans)' }}>
      <blockquote style={{
        margin:0,
        fontSize:'var(--fs-small)',
        fontStyle:'italic',
        lineHeight:'var(--lh-relaxed)',
        color:'var(--doc-text)',
      }}>“{quote}”</blockquote>
      {(role || company) && (
        <figcaption style={{ marginTop:'var(--space-4)' }}>
          {role && (
            <div style={{
              fontSize:'var(--fs-caption)',
              fontWeight:'var(--fw-bold)',
              letterSpacing:'var(--ls-wide)',
              textTransform:'uppercase',
              color:'var(--doc-text)',
            }}>{role},</div>
          )}
          {company && (
            <div style={{
              fontSize:'var(--fs-caption)',
              letterSpacing:'var(--ls-wide)',
              textTransform:'uppercase',
              color:'var(--doc-text)',
            }}>{company}</div>
          )}
        </figcaption>
      )}
    </figure>
  );
}
