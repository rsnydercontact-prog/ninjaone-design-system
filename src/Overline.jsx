// NinjaOne marketing — section overline
// 11px, semibold, uppercase, 0.08em tracking, medium blue. The only place
// UPPERCASE is allowed in the system besides status chips.
export function Overline({ children, color = 'var(--doc-overline)', style }) {
  return (
    <div style={{
      fontFamily:'var(--font-sans)',
      fontSize:'var(--fs-overline)',
      fontWeight:'var(--fw-semibold)',
      letterSpacing:'var(--ls-overline)',
      textTransform:'uppercase',
      color,
      ...style,
    }}>
      {children}
    </div>
  );
}
