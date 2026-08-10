// NinjaOne — section heading
// Blue heading over a short green underline accent. Opens every interior page
// of a guide; also works as a section break inside a datasheet.
export function SectionHeading({ children, size = 'h1', accent = true, align = 'left' }) {
  const fontSize = { h1: 'var(--fs-h1)', h2: 'var(--fs-h2)', h3: 'var(--fs-h3)' }[size];
  return (
    <div style={{ textAlign: align }}>
      <h2 style={{
        margin:0,
        fontFamily:'var(--font-display)',
        fontSize,
        fontWeight:'var(--fw-bold)',
        lineHeight:'var(--lh-tight)',
        letterSpacing:'var(--ls-tight)',
        color:'var(--doc-subheading)',
      }}>{children}</h2>
      {accent && (
        <div style={{
          width:64, height:4, marginTop:'var(--space-5)',
          marginLeft: align === 'center' ? 'auto' : 0,
          marginRight: align === 'center' ? 'auto' : 0,
          background:'var(--ninja-green)',
          borderRadius:2,
        }} />
      )}
    </div>
  );
}
