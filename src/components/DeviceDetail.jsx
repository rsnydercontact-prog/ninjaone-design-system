// NinjaOne RMM — Device detail panel
import { useState } from 'react';
import { Pill } from './Pill.jsx';
import { Button } from './Button.jsx';
import { Icon } from './Icon.jsx';

const TABS = ['Overview', 'Patches', 'Software', 'Activity', 'Tickets'];

export function DeviceDetail({ device, onClose }) {
  const [tab, setTab] = useState('Overview');
  if (!device) return null;
  return (
    <div style={{
      background:'#08243B', border:'1px solid rgba(255,255,255,0.08)',
      borderRadius:8, fontFamily:'Inter, sans-serif',
    }}>
      <div style={{ padding:'18px 20px', borderBottom:'1px solid rgba(255,255,255,0.08)', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div style={{ display:'flex', alignItems:'center', gap:14 }}>
          <div style={{ width:40, height:40, borderRadius:6, background:'#0E2E48', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <Icon name={device.icon || 'monitor'} size={18} color="#04FF88" />
          </div>
          <div>
            <div style={{ fontSize:18, fontWeight:600, color:'#fff', letterSpacing:'-0.01em' }}>{device.name}</div>
            <div style={{ fontSize:12, color:'#8FA8B8', marginTop:2 }}>{device.os} · {device.site} · agent v6.2.1</div>
          </div>
        </div>
        <div style={{ display:'flex', gap:8, alignItems:'center' }}>
          <Pill kind={device.statusKind}>{device.status}</Pill>
          <Button variant="secondary" size="sm" icon="terminal">Run script</Button>
          <Button variant="primary" size="sm" icon="shield-check">Patch now</Button>
          {onClose && <Button variant="ghost" size="sm" icon="x" onClick={onClose} />}
        </div>
      </div>

      <div style={{ display:'flex', gap:0, borderBottom:'1px solid rgba(255,255,255,0.08)', padding:'0 20px' }}>
        {TABS.map(t => {
          const active = tab === t;
          return (
            <button key={t} onClick={() => setTab(t)} style={{
              background:'transparent', border:'none', cursor:'pointer',
              padding:'12px 0', marginRight:24,
              fontFamily:'Inter', fontSize:13, fontWeight: active ? 600 : 500,
              color: active ? '#fff' : '#8FA8B8',
              borderBottom: active ? '2px solid #04FF88' : '2px solid transparent',
              marginBottom:-1,
            }}>{t}</button>
          );
        })}
      </div>

      <div style={{ padding:20, display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
        <DetailField label="Hostname" value={device.name} />
        <DetailField label="IP address" value="10.0.4.142" mono />
        <DetailField label="MAC address" value="9C:B6:D0:8E:42:1A" mono />
        <DetailField label="Operating system" value={device.os} />
        <DetailField label="CPU" value="Intel i7-1260P · 12 cores · 23%" />
        <DetailField label="Memory" value="16 GB · 9.4 GB used" />
        <DetailField label="Storage" value="512 GB SSD · 64% used" />
        <DetailField label="Last patch" value="2 days ago" />
      </div>
    </div>
  );
}

function DetailField({ label, value, mono }) {
  return (
    <div>
      <div style={{ fontSize:11, fontWeight:600, color:'#547A91', textTransform:'uppercase', letterSpacing:'0.08em' }}>{label}</div>
      <div style={{ fontSize:14, color:'#fff', marginTop:4, fontFamily: mono ? 'JetBrains Mono, monospace' : 'Inter', fontVariantNumeric:'tabular-nums' }}>{value}</div>
    </div>
  );
}
