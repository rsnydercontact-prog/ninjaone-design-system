import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../tokens/tokens.css';
import { Datasheet } from '../src/Datasheet.jsx';
import { Guide } from '../src/Guide.jsx';

const DOCS = [
  { id: 'datasheet', label: 'Datasheet', render: () => <Datasheet /> },
  { id: 'guide',     label: 'Guide',     render: () => <Guide /> },
];

function Demo() {
  const [doc, setDoc] = useState('datasheet');
  return (
    <>
      <nav style={{
        position:'fixed', bottom:16, left:'50%', transform:'translateX(-50%)', zIndex:100,
        display:'flex', gap:4, padding:4,
        background:'rgba(0,70,104,0.92)', backdropFilter:'blur(12px)',
        borderRadius:'var(--radius-pill)',
        fontFamily:'var(--font-sans)',
      }}>
        {DOCS.map(d => (
          <button key={d.id} onClick={() => setDoc(d.id)} style={{
            padding:'6px 16px', borderRadius:'var(--radius-pill)', border:'none', cursor:'pointer',
            fontSize:13, fontWeight:600, fontFamily:'var(--font-sans)',
            background: doc === d.id ? 'var(--ninja-green)' : 'transparent',
            color: doc === d.id ? 'var(--ninja-navy)' : 'var(--mist-3)',
          }}>{d.label}</button>
        ))}
      </nav>
      {DOCS.find(d => d.id === doc).render()}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Demo />
  </StrictMode>
);
