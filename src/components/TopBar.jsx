// NinjaOne RMM — Top Bar
import { Fragment } from 'react';
import { Button } from './Button.jsx';
import { Icon } from './Icon.jsx';

export function TopBar({ title, breadcrumbs }) {
  return (
    <header style={{
      position:'sticky', top:0, zIndex:10,
      height:56, background:'rgba(4,17,29,0.85)', backdropFilter:'blur(12px)',
      borderBottom:'1px solid rgba(255,255,255,0.08)',
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'0 24px',
      fontFamily:'Inter, sans-serif',
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:8 }}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div style={{ display:'flex', alignItems:'center', gap:6, color:'#8FA8B8', fontSize:13 }}>
            {breadcrumbs.map((b,i) => (
              <Fragment key={i}>
                <span>{b}</span>
                {i < breadcrumbs.length - 1 && <span style={{ opacity:0.5 }}>/</span>}
              </Fragment>
            ))}
            <span style={{ opacity:0.5 }}>/</span>
          </div>
        )}
        <h1 style={{ margin:0, fontSize:18, fontWeight:600, color:'#fff', letterSpacing:'-0.01em' }}>{title}</h1>
      </div>

      <div style={{ display:'flex', alignItems:'center', gap:8 }}>
        <div style={{ display:'flex', alignItems:'center', gap:8, padding:'6px 12px', background:'#08243B', border:'1px solid rgba(255,255,255,0.08)', borderRadius:6, width:300 }}>
          <Icon name="search" size={14} color="#8FA8B8" />
          <input placeholder="Search devices, patches, scripts…"
            style={{ background:'transparent', border:'none', outline:'none', color:'#fff', fontSize:13, fontFamily:'Inter', flex:1, minWidth:0 }} />
          <span style={{ fontSize:11, color:'#547A91', fontFamily:'JetBrains Mono, monospace' }}>⌘K</span>
        </div>
        <button style={{ background:'transparent', border:'1px solid rgba(255,255,255,0.14)', borderRadius:6, padding:'7px 9px', color:'#B8C8D2', cursor:'pointer', display:'flex', position:'relative' }}>
          <Icon name="bell" size={16} />
          <span style={{ position:'absolute', top:5, right:6, width:6, height:6, background:'#F39500', borderRadius:'50%' }} />
        </button>
        <Button variant="primary" size="sm" icon="plus">Add device</Button>
      </div>
    </header>
  );
}
