import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../tokens/tokens.css';
import { Datasheet } from '../src/Datasheet.jsx';
import { Guide } from '../src/Guide.jsx';
import { OneSheet } from './OneSheet.jsx';
import { Components } from './Components.jsx';

const DOCS = [
  { id: 'datasheet',  label: 'Datasheet',  render: () => <Datasheet /> },
  { id: 'one-sheet',  label: 'One-sheet',  render: () => <OneSheet /> },
  { id: 'guide',      label: 'Guide',      render: () => <Guide /> },
  { id: 'components', label: 'Components', render: () => <Components /> },
];

// ?doc=<id> opens a specific document; ?nav=0 hides the switcher (for print
// and screenshots).
const params = new URLSearchParams(window.location.search);
const INITIAL = DOCS.some(d => d.id === params.get('doc')) ? params.get('doc') : 'datasheet';
const SHOW_NAV = params.get('nav') !== '0';

function Demo() {
  const [doc, setDoc] = useState(INITIAL);
  return (
    <>
      {SHOW_NAV && <nav style={{
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
      </nav>}
      {DOCS.find(d => d.id === doc).render()}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Demo />
  </StrictMode>
);
