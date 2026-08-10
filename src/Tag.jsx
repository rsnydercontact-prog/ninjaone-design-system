// NinjaOne — document tag
// The small uppercase chip that names a document's format: GUIDE, REPORT,
// DATASHEET. Square-cornered on covers; the pill radius is for status only.
export function Tag({ children, tone = 'green' }) {
  const palette = {
    green: { background: 'var(--ninja-green)', color: 'var(--ninja-navy)' },
    navy:  { background: 'var(--ninja-navy)',  color: 'var(--paper)' },
    blue:  { background: 'var(--ninja-blue-medium)', color: 'var(--paper)' },
    mint:  { background: 'var(--wash-mint)',   color: 'var(--ninja-navy)' },
  }[tone];

  return (
    <span style={{
      ...palette,
      display:'inline-block',
      padding:'10px 18px',
      borderRadius:'var(--radius-sm)',
      fontFamily:'var(--font-sans)',
      fontSize:'var(--fs-caption)',
      fontWeight:'var(--fw-semibold)',
      letterSpacing:'var(--ls-overline)',
      textTransform:'uppercase',
    }}>{children}</span>
  );
}
