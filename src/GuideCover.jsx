// NinjaOne — guide / ebook cover
// White page, wordmark top-right, navy panel carrying the dot grid, a headline
// whose first line is green and the rest white, and a format tag bottom-right.
import { DotGrid } from './DotGrid.jsx';
import { Tag } from './Tag.jsx';
import wordmarkBlue from '../assets/ninjaone-wordmark-blue.png';

export function GuideCover({ lead, title, tag = 'Guide', ratio = '17 / 22' }) {
  return (
    <div style={{ fontFamily:'var(--font-sans)', background:'var(--doc-bg)' }}>
      <div style={{ display:'flex', justifyContent:'flex-end', padding:'0 0 var(--space-7)' }}>
        <img src={wordmarkBlue} alt="NinjaOne" style={{ height:30, width:'auto' }} />
      </div>

      <div style={{
        position:'relative',
        aspectRatio: ratio,
        background:'var(--ninja-navy)',
        borderRadius:'var(--radius-doc)',
        padding:'var(--space-9) var(--space-8) var(--space-8)',
        display:'flex',
        flexDirection:'column',
        overflow:'hidden',
      }}>
        <div style={{ padding:'0 var(--space-4)' }}>
          <DotGrid />
        </div>

        <h1 style={{
          margin:'var(--space-8) 0 0',
          fontFamily:'var(--font-display)',
          fontSize:'clamp(32px, 5.2vw, 56px)',
          fontWeight:'var(--fw-bold)',
          lineHeight:1.16,
          letterSpacing:'var(--ls-tight)',
          color:'var(--doc-on-band)',
        }}>
          {lead && <span style={{ color:'var(--ninja-green)' }}>{lead} </span>}
          {title}
        </h1>

        <div style={{ flex:1 }} />

        {tag && (
          <div style={{ display:'flex', justifyContent:'flex-end' }}>
            <Tag>{tag}</Tag>
          </div>
        )}
      </div>
    </div>
  );
}
