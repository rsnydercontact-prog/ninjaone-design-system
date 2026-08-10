// NinjaOne RMM — Patch panel
import { Pill } from './Pill.jsx';
import { Button } from './Button.jsx';

const td = { padding:'11px 14px', borderBottom:'1px solid rgba(255,255,255,0.06)', color:'#fff' };

const DEMO_PATCHES = [
  { cve:'CVE-2025-1042', sev:'critical', title:'Microsoft Edge — remote code execution', count: 38, vendor:'Microsoft' },
  { cve:'CVE-2025-0987', sev:'high',     title:'Chrome 124 — sandbox escape', count: 142, vendor:'Google' },
  { cve:'CVE-2025-0941', sev:'high',     title:'OpenSSL 3.2.1 — buffer overflow', count: 18, vendor:'OpenSSL' },
  { cve:'CVE-2025-0876', sev:'medium',   title:'Zoom 6.0.4 — privilege escalation', count: 64, vendor:'Zoom' },
  { cve:'CVE-2025-0812', sev:'medium',   title:'7-Zip 24.07 — path traversal', count: 92, vendor:'7-Zip' },
  { cve:'CVE-2025-0744', sev:'low',      title:'Notepad++ 8.6.5 — DLL hijack', count: 7,  vendor:'Notepad++' },
];

const sevPill = { critical:'danger', high:'warn', medium:'info', low:'neutral' };

export function PatchPanel({ patches = DEMO_PATCHES }) {
  return (
    <div style={{ background:'#08243B', border:'1px solid rgba(255,255,255,0.08)', borderRadius:8, fontFamily:'Inter, sans-serif' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 18px', borderBottom:'1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ fontSize:14, fontWeight:600, color:'#fff' }}>Outstanding patches</div>
        <div style={{ display:'flex', gap:8 }}>
          <Button variant="secondary" size="sm" icon="filter">Filter</Button>
          <Button variant="primary" size="sm" icon="shield-check">Patch all</Button>
        </div>
      </div>
      <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
        <thead>
          <tr style={{ background:'#0E2E48' }}>
            {['Severity','CVE','Patch','Vendor','Affected','Action'].map(h => (
              <th key={h} style={{ textAlign: h === 'Affected' || h === 'Action' ? 'right' : 'left', padding:'10px 14px', fontSize:11, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em', color:'#8FA8B8', borderBottom:'1px solid rgba(255,255,255,0.14)' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {patches.map(p => (
            <tr key={p.cve}>
              <td style={td}><Pill kind={sevPill[p.sev]}>{p.sev}</Pill></td>
              <td style={{ ...td, fontFamily:'JetBrains Mono, monospace', fontSize:12, color:'#B8C8D2' }}>{p.cve}</td>
              <td style={{ ...td, color:'#fff' }}>{p.title}</td>
              <td style={{ ...td, color:'#B8C8D2' }}>{p.vendor}</td>
              <td style={{ ...td, textAlign:'right', fontVariantNumeric:'tabular-nums', color:'#fff', fontWeight:600 }}>{p.count}</td>
              <td style={{ ...td, textAlign:'right' }}><Button variant="secondary" size="sm">Deploy</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
