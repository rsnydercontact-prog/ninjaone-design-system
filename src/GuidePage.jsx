// NinjaOne — guide interior page
// Pale mint ground, wordmark and green rule at the top, running title and page
// number at the foot. Wrap body content in it; it owns the page furniture.
import wordmarkBlue from '../assets/ninjaone-wordmark-blue.png';

export function GuidePage({ children, runningTitle, page, of, ratio = '17 / 22' }) {
  const rule = { height:1, background:'var(--ninja-green)', opacity:0.55 };
  return (
    <article style={{
      background:'var(--wash-mint-pale)',
      borderRadius:'var(--radius-doc)',
      padding:'var(--space-7) var(--space-8) var(--space-6)',
      aspectRatio: ratio,
      display:'flex',
      flexDirection:'column',
      fontFamily:'var(--font-sans)',
    }}>
      <div style={{ display:'flex', justifyContent:'flex-end' }}>
        <img src={wordmarkBlue} alt="NinjaOne" style={{ height:24, width:'auto' }} />
      </div>
      <div style={{ ...rule, marginTop:'var(--space-5)' }} />

      <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'center', padding:'var(--space-8) var(--space-7)' }}>
        {children}
      </div>

      <div style={{ ...rule, marginBottom:'var(--space-4)' }} />
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
        <div style={{
          fontSize:'var(--fs-overline)',
          fontWeight:'var(--fw-semibold)',
          letterSpacing:'var(--ls-overline)',
          textTransform:'uppercase',
          color:'var(--doc-text)',
        }}>{runningTitle}</div>
        {page != null && (
          <div style={{ fontSize:'var(--fs-caption)', color:'var(--doc-text-muted)', fontVariantNumeric:'tabular-nums' }}>
            {page}{of != null && ` / ${of}`}
          </div>
        )}
      </div>
    </article>
  );
}
