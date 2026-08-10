// NinjaOne RMM — Sidebar
import { useState } from 'react';
import { Icon } from './Icon.jsx';
import defaultLogo from '../../assets/ninjaone-logo-green.png';

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
  { id: 'devices',   label: 'Devices',   icon: 'monitor' },
  { id: 'patches',   label: 'Patching',  icon: 'shield-check' },
  { id: 'backup',    label: 'Backup',    icon: 'hard-drive' },
  { id: 'mdm',       label: 'MDM',       icon: 'smartphone' },
  { id: 'scripts',   label: 'Automation',icon: 'terminal' },
  { id: 'tickets',   label: 'Tickets',   icon: 'inbox' },
  { id: 'reports',   label: 'Reports',   icon: 'bar-chart-3' },
];

const META_ITEMS = [
  { id: 'settings', label: 'Settings', icon: 'settings' },
  { id: 'help',     label: 'Help',     icon: 'circle-help' },
];

function SidebarItem({ item, isActive, onNavigate }) {
  const [hover, setHover] = useState(false);
  return (
    <button onClick={() => onNavigate?.(item.id)}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display:'flex', alignItems:'center', gap:10,
        padding:'8px 12px', width:'100%',
        background: isActive ? 'rgba(4,255,136,0.10)' : (hover ? 'rgba(255,255,255,0.04)' : 'transparent'),
        color: isActive ? '#04FF88' : '#B8C8D2',
        border: 'none', borderRadius: 6,
        fontSize:14, fontWeight: isActive ? 600 : 500,
        cursor:'pointer', textAlign:'left',
        fontFamily:'Inter, sans-serif',
        position:'relative',
      }}>
      {isActive && <div style={{ position:'absolute', left:-12, top:6, bottom:6, width:2, background:'#04FF88', borderRadius:2 }} />}
      <Icon name={item.icon} size={16} />
      <span>{item.label}</span>
    </button>
  );
}

export function Sidebar({ active, onNavigate, logoSrc = defaultLogo, tenant = 'Acme Corp', tenantSub = 'Production', tenantInitials = 'AC' }) {
  return (
    <aside style={{
      width:240, height:'100vh', position:'fixed', left:0, top:0,
      background:'#04111D',
      borderRight:'1px solid rgba(255,255,255,0.08)',
      padding:'18px 12px', display:'flex', flexDirection:'column', gap:4,
      fontFamily:'Inter, sans-serif',
    }}>
      <div style={{ padding:'4px 12px 16px' }}>
        <img src={logoSrc} alt="NinjaOne" style={{ height:22, width:'auto' }} />
      </div>
      <div style={{ fontSize:11, fontWeight:600, color:'#547A91', textTransform:'uppercase', letterSpacing:'0.08em', padding:'8px 12px 6px' }}>Workspace</div>
      {NAV_ITEMS.map(it => (
        <SidebarItem key={it.id} item={it} isActive={active === it.id} onNavigate={onNavigate} />
      ))}
      <div style={{ flex:1 }} />
      {META_ITEMS.map(it => (
        <SidebarItem key={it.id} item={it} isActive={active === it.id} onNavigate={onNavigate} />
      ))}
      <div style={{ marginTop:12, padding:'12px', background:'#08243B', borderRadius:6, display:'flex', alignItems:'center', gap:10 }}>
        <div style={{ width:28, height:28, borderRadius:6, background:'linear-gradient(135deg,#04FF88,#55EBFF)', color:'#04111D', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:12 }}>{tenantInitials}</div>
        <div style={{ minWidth:0 }}>
          <div style={{ fontSize:13, fontWeight:600, color:'#fff', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{tenant}</div>
          <div style={{ fontSize:11, color:'#8FA8B8' }}>{tenantSub}</div>
        </div>
      </div>
    </aside>
  );
}
