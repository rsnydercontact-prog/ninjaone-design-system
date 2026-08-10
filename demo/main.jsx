import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../tokens/tokens.css';
import { App } from '../src/components/App.jsx';
import { Datasheet } from '../src/marketing/Datasheet.jsx';

const SURFACES = [
  { id: 'product',   label: 'Product UI' },
  { id: 'marketing', label: 'Datasheet' },
];

function Demo() {
  const [surface, setSurface] = useState('product');
  // The two surfaces own different grounds — keep the page behind them in sync.
  document.body.style.background = surface === 'product' ? 'var(--bg-app)' : 'var(--doc-bg)';
  return (
    <>
      <nav style={{
        position:'fixed', bottom:16, left:'50%', transform:'translateX(-50%)', zIndex:100,
        display:'flex', gap:4, padding:4,
        background:'rgba(0,70,104,0.92)', backdropFilter:'blur(12px)',
        border:'1px solid rgba(255,255,255,0.14)', borderRadius:'var(--radius-pill)',
        fontFamily:'var(--font-sans)',
      }}>
        {SURFACES.map(s => (
          <button key={s.id} onClick={() => setSurface(s.id)} style={{
            padding:'6px 16px', borderRadius:'var(--radius-pill)', border:'none', cursor:'pointer',
            fontSize:13, fontWeight:600, fontFamily:'var(--font-sans)',
            background: surface === s.id ? 'var(--ninja-green)' : 'transparent',
            color: surface === s.id ? 'var(--ink-1)' : '#C4DBDF',
          }}>{s.label}</button>
        ))}
      </nav>
      {surface === 'product' ? <App /> : <Datasheet />}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Demo />
  </StrictMode>
);
