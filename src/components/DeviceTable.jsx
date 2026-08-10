// NinjaOne RMM — Device table
import { Pill } from './Pill.jsx';
import { Icon } from './Icon.jsx';

const td = { padding:'11px 14px', borderBottom:'1px solid rgba(255,255,255,0.06)', color:'#fff' };

export function DeviceTable({ devices, onSelect, selectedId }) {
  return (
    <div style={{
      background:'#08243B', border:'1px solid rgba(255,255,255,0.08)',
      borderRadius:8, overflow:'hidden', fontFamily:'Inter, sans-serif',
    }}>
      <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
        <thead>
          <tr style={{ background:'#0E2E48' }}>
            {['Device', 'Status', 'OS', 'Site', 'Last seen', 'CPU', 'RAM'].map(h => (
              <th key={h} style={{
                textAlign: ['CPU','RAM'].includes(h) ? 'right' : 'left',
                padding:'10px 14px', fontSize:11, fontWeight:600,
                textTransform:'uppercase', letterSpacing:'0.08em',
                color:'#8FA8B8', borderBottom:'1px solid rgba(255,255,255,0.14)',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {devices.map((d) => {
            const isSel = d.id === selectedId;
            return (
              <tr key={d.id} onClick={() => onSelect?.(d.id)}
                style={{ cursor:'pointer', background: isSel ? 'rgba(4,255,136,0.06)' : 'transparent' }}
                onMouseEnter={e => { if (!isSel) e.currentTarget.style.background='rgba(255,255,255,0.02)'; }}
                onMouseLeave={e => { if (!isSel) e.currentTarget.style.background='transparent'; }}>
                <td style={td}>
                  <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                    <Icon name={d.icon || 'monitor'} size={14} color="#8FA8B8" />
                    <span style={{ color:'#fff', fontWeight:500 }}>{d.name}</span>
                  </div>
                </td>
                <td style={td}><Pill kind={d.statusKind}>{d.status}</Pill></td>
                <td style={{ ...td, color:'#B8C8D2' }}>{d.os}</td>
                <td style={{ ...td, color:'#B8C8D2' }}>{d.site}</td>
                <td style={{ ...td, color:'#8FA8B8', fontSize:12 }}>{d.lastSeen}</td>
                <td style={{ ...td, textAlign:'right', fontVariantNumeric:'tabular-nums', color:'#B8C8D2' }}>{d.cpu}</td>
                <td style={{ ...td, textAlign:'right', fontVariantNumeric:'tabular-nums', color:'#B8C8D2' }}>{d.ram}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
