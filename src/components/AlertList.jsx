// NinjaOne RMM — Alert list (sidebar item on dashboard)
import { Pill } from './Pill.jsx';

export function AlertList({ alerts }) {
  return (
    <div style={{
      background:'#08243B', border:'1px solid rgba(255,255,255,0.08)',
      borderRadius:8, fontFamily:'Inter, sans-serif',
    }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 18px', borderBottom:'1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ fontSize:14, fontWeight:600, color:'#fff' }}>Active alerts</div>
        <Pill kind="danger">{alerts.filter(a => a.kind === 'danger').length} critical</Pill>
      </div>
      <div>
        {alerts.map((a,i) => (
          <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:12, padding:'12px 18px', borderBottom: i < alerts.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', cursor:'pointer' }}>
            <div style={{ width:8, height:8, borderRadius:'50%', marginTop:6, flexShrink:0,
              background: a.kind === 'danger' ? '#E5484D' : a.kind === 'warn' ? '#F39500' : '#007DA5' }} />
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ fontSize:13, fontWeight:600, color:'#fff' }}>{a.title}</div>
              <div style={{ fontSize:12, color:'#8FA8B8', marginTop:2 }}>{a.detail}</div>
            </div>
            <div style={{ fontSize:11, color:'#547A91', whiteSpace:'nowrap' }}>{a.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
