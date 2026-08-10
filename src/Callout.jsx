// NinjaOne marketing — sidebar callout card
// Mint-washed panel holding an overline or blue heading plus bolded item
// definitions. The right-hand rail on every datasheet.
import { Overline } from './Overline.jsx';

export function Callout({ title, heading, items = [], tone = 'mint', children }) {
  const background = {
    mint: 'var(--wash-mint-pale)',
    cyan: 'var(--wash-cyan)',
    flat: 'var(--mist-6)',
  }[tone];

  return (
    <aside style={{
      background,
      borderRadius:'var(--radius-doc)',
      padding:'var(--space-6)',
      fontFamily:'var(--font-sans)',
    }}>
      {title && <Overline>{title}</Overline>}
      {heading && (
        <h3 style={{
          margin:0,
          fontSize:'var(--fs-h4)',
          fontWeight:'var(--fw-semibold)',
          color:'var(--doc-subheading)',
          letterSpacing:'-0.01em',
        }}>{heading}</h3>
      )}
      <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-4)', marginTop:'var(--space-4)' }}>
        {items.map(item => (
          <div key={item.title}>
            <div style={{
              fontSize:'var(--fs-small)',
              fontWeight:'var(--fw-semibold)',
              color:'var(--doc-text)',
            }}>{item.title}</div>
            <p style={{
              margin:'2px 0 0',
              fontSize:'var(--fs-caption)',
              lineHeight:'var(--lh-normal)',
              color:'var(--doc-text)',
            }}>{item.body}</p>
          </div>
        ))}
        {children}
      </div>
    </aside>
  );
}
