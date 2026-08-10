// NinjaOne — feature / value-prop grid
// Bold navy title over a short body, tiled in columns. The workhorse block of
// the body copy: "Why NinjaOne Patch Manager?", "Key features", use-case lists.
export function FeatureGrid({ items, columns = 2, size = 'small' }) {
  const fontSize = size === 'body' ? 'var(--fs-body)' : 'var(--fs-small)';
  return (
    <div style={{
      display:'grid',
      gridTemplateColumns:`repeat(${columns}, minmax(0, 1fr))`,
      gap:'var(--space-6) var(--space-7)',
      fontFamily:'var(--font-sans)',
    }}>
      {items.map(item => (
        <div key={item.title}>
          <div style={{ fontSize, fontWeight:'var(--fw-semibold)', color:'var(--doc-text)' }}>{item.title}</div>
          <p style={{ margin:'var(--space-1) 0 0', fontSize, lineHeight:'var(--lh-normal)', color:'var(--doc-text)' }}>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
