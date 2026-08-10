// NinjaOne marketing — document hero
//   variant="band"  navy filled band, white headline, green wordmark  (Patch Manager datasheet)
//   variant="light" white ground, navy headline, blue wordmark        (Vulnerability datasheet)
import { Chevrons } from './Chevrons.jsx';
import wordmarkGreen from '../assets/ninjaone-logo-green.png';
import wordmarkBlue from '../assets/ninjaone-wordmark-blue.png';

export function DocHero({ title, subtitle, variant = 'band', logo = true, children }) {
  const isBand = variant === 'band';
  return (
    <header style={{
      position:'relative',
      overflow:'hidden',
      background: isBand ? 'var(--doc-band)' : 'transparent',
      borderRadius: isBand ? 'var(--radius-doc)' : 0,
      padding: isBand ? '44px 44px 40px' : '8px 0 24px',
      fontFamily:'var(--font-sans)',
      display:'flex',
      alignItems:'flex-start',
      justifyContent:'space-between',
      gap:'var(--space-6)',
    }}>
      {/* Chevrons sit between headline and wordmark, clipped by the band. */}
      <div style={{ position:'absolute', left:'46%', top: isBand ? 24 : 0, pointerEvents:'none' }}>
        <Chevrons
          color={isBand ? 'rgba(255,255,255,0.10)' : 'var(--wash-cyan)'}
          height={isBand ? 104 : 88}
        />
      </div>

      <div style={{ position:'relative', maxWidth:'56%' }}>
        <h1 style={{
          margin:0,
          fontSize:'var(--fs-h1)',
          fontWeight:'var(--fw-bold)',
          lineHeight:'var(--lh-tight)',
          letterSpacing:'var(--ls-tight)',
          color: isBand ? 'var(--doc-on-band)' : 'var(--doc-heading)',
        }}>{title}</h1>
        {subtitle && (
          <p style={{
            margin:'var(--space-3) 0 0',
            fontSize:'var(--fs-body-lg)',
            fontWeight:'var(--fw-regular)',
            lineHeight:'var(--lh-normal)',
            color: isBand ? 'var(--doc-on-band-muted)' : 'var(--doc-text-muted)',
          }}>{subtitle}</p>
        )}
        {children}
      </div>

      {logo && (
        <img
          src={isBand ? wordmarkGreen : wordmarkBlue}
          alt="NinjaOne"
          style={{ position:'relative', height:28, width:'auto', flexShrink:0, marginTop:4 }}
        />
      )}
    </header>
  );
}
