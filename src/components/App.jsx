// NinjaOne RMM — App shell
// A full dashboard assembled from the kit. Doubles as the demo app and as a
// worked example of how the components compose.
import { useState } from 'react';
import { Sidebar } from './Sidebar.jsx';
import { TopBar } from './TopBar.jsx';
import { KpiCard } from './KpiCard.jsx';
import { AlertList } from './AlertList.jsx';
import { DeviceTable } from './DeviceTable.jsx';
import { DeviceDetail } from './DeviceDetail.jsx';
import { PatchPanel } from './PatchPanel.jsx';

const DEVICES = [
  { id:'d1', name:'acme-lt-014',  icon:'monitor',     status:'Online',      statusKind:'ok',      os:'Windows 11',   site:'HQ',      lastSeen:'2 min ago',  cpu:'12%', ram:'9.4 GB' },
  { id:'d2', name:'acme-lt-015',  icon:'monitor',     status:'Needs patch', statusKind:'warn',    os:'Windows 11',   site:'HQ',      lastSeen:'14 min ago', cpu:'7%',  ram:'5.1 GB' },
  { id:'d3', name:'acme-srv-002', icon:'server',      status:'Offline',     statusKind:'danger',  os:'Ubuntu 22.04', site:'Datacenter', lastSeen:'2 days ago', cpu:'—',  ram:'—' },
  { id:'d4', name:'acme-mac-008', icon:'laptop',      status:'Online',      statusKind:'ok',      os:'macOS 14.4',   site:'Remote',  lastSeen:'just now',   cpu:'23%', ram:'11.2 GB' },
  { id:'d5', name:'acme-srv-003', icon:'server',      status:'Online',      statusKind:'ok',      os:'Windows Srv',  site:'Datacenter', lastSeen:'1 min ago',  cpu:'42%', ram:'48 GB' },
  { id:'d6', name:'acme-mob-022', icon:'smartphone',  status:'Scanning',    statusKind:'info',    os:'iOS 17.4',     site:'Remote',  lastSeen:'3 min ago',  cpu:'—',  ram:'—' },
  { id:'d7', name:'acme-lt-031',  icon:'monitor',     status:'Online',      statusKind:'ok',      os:'Windows 11',   site:'Remote',  lastSeen:'5 min ago',  cpu:'19%', ram:'12.0 GB' },
];

const ALERTS = [
  { kind:'danger', title:'CVE-2025-1042 — Critical', detail:'Microsoft Edge RCE affects 38 endpoints', time:'4h ago' },
  { kind:'danger', title:'acme-srv-002 offline',     detail:"Hasn't checked in for 2 days",           time:'2d ago' },
  { kind:'warn',   title:'Disk usage > 90%',         detail:'acme-lt-018 · 487 GB / 512 GB',          time:'24m ago' },
  { kind:'warn',   title:'Backup failed',            detail:'acme-srv-005 · backup window exceeded',  time:'1h ago' },
  { kind:'info',   title:'Patch deployment running', detail:'48 of 142 endpoints completed',          time:'12m ago' },
];

const SPARK_UP = { line:'M0,24 L20,22 L40,20 L60,16 L80,18 L100,12 L120,14 L140,8 L160,10 L180,5 L200,3', area:'M0,24 L20,22 L40,20 L60,16 L80,18 L100,12 L120,14 L140,8 L160,10 L180,5 L200,3 L200,32 L0,32 Z' };
const SPARK_STEADY = { line:'M0,16 L20,18 L40,15 L60,17 L80,14 L100,16 L120,13 L140,15 L160,12 L180,14 L200,11', area:'M0,16 L20,18 L40,15 L60,17 L80,14 L100,16 L120,13 L140,15 L160,12 L180,14 L200,11 L200,32 L0,32 Z' };

const TITLES = { dashboard:'Dashboard', devices:'Devices', patches:'Patching', backup:'Backup', mdm:'MDM', scripts:'Automation', tickets:'Tickets', reports:'Reports', settings:'Settings', help:'Help' };

const OS_HEALTH = [
  { os:'Windows', pct:96, count:1842, color:'#04FF88' },
  { os:'macOS',   pct:91, count:642,  color:'#55EBFF' },
  { os:'Linux',   pct:88, count:287,  color:'#007DA5' },
  { os:'iOS / Android', pct:99, count:120, color:'#6F346F' },
];

export function App() {
  const [route, setRoute] = useState('dashboard');
  const [selectedDevice, setSelectedDevice] = useState(null);

  return (
    <div style={{ background:'#04111D', minHeight:'100vh', color:'#fff' }}>
      <Sidebar active={route} onNavigate={(id) => { setRoute(id); setSelectedDevice(null); }} />
      <div style={{ marginLeft:240 }}>
        <TopBar title={TITLES[route]} breadcrumbs={selectedDevice ? ['Devices', selectedDevice.name] : (route === 'dashboard' ? [] : ['Workspace'])} />
        <main style={{ padding:24, maxWidth:1440 }}>
          {route === 'dashboard' && (
            <>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:14, marginBottom:18 }}>
                <KpiCard label="Devices online" value="2,847" delta="↑ 12" deltaKind="ok" sub="of 2,891 managed" sparkline={SPARK_UP} />
                <KpiCard label="Open alerts" value="38" delta="↑ 5" deltaKind="warn" sub="7 critical · 31 warning" sparkline={SPARK_STEADY} />
                <KpiCard label="Patch compliance" value="94.2%" accent="gradient" delta="↑ 2.1" deltaKind="ok" sub="across all OS families" sparkline={SPARK_UP} />
                <KpiCard label="Backup success" value="98.7%" delta="—" deltaKind="neutral" sub="last 24 hours" sparkline={SPARK_STEADY} />
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, marginBottom:18 }}>
                <AlertList alerts={ALERTS} />
                <div style={{ background:'#08243B', border:'1px solid rgba(255,255,255,0.08)', borderRadius:8, padding:18 }}>
                  <div style={{ fontSize:11, fontWeight:600, color:'#8FA8B8', textTransform:'uppercase', letterSpacing:'0.08em' }}>Endpoint health by OS</div>
                  <div style={{ display:'flex', flexDirection:'column', gap:14, marginTop:16 }}>
                    {OS_HEALTH.map(row => (
                      <div key={row.os}>
                        <div style={{ display:'flex', justifyContent:'space-between', fontSize:13, marginBottom:4 }}>
                          <span style={{ color:'#fff', fontWeight:500 }}>{row.os}</span>
                          <span style={{ color:'#8FA8B8', fontVariantNumeric:'tabular-nums' }}>{row.pct}% · {row.count.toLocaleString()}</span>
                        </div>
                        <div style={{ height:6, background:'#0E2E48', borderRadius:3, overflow:'hidden' }}>
                          <div style={{ height:'100%', width:`${row.pct}%`, background: row.color, borderRadius:3 }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <DeviceTable devices={DEVICES.slice(0,5)} selectedId={null} onSelect={(id) => { setRoute('devices'); setSelectedDevice(DEVICES.find(d => d.id === id)); }} />
            </>
          )}

          {route === 'devices' && (
            <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
              <DeviceTable devices={DEVICES} selectedId={selectedDevice?.id} onSelect={(id) => setSelectedDevice(DEVICES.find(d => d.id === id))} />
              {selectedDevice && <DeviceDetail device={selectedDevice} onClose={() => setSelectedDevice(null)} />}
            </div>
          )}

          {route === 'patches' && <PatchPanel />}

          {!['dashboard','devices','patches'].includes(route) && (
            <div style={{ padding:48, textAlign:'center', background:'#08243B', border:'1px solid rgba(255,255,255,0.08)', borderRadius:8 }}>
              <div style={{ fontSize:18, fontWeight:600, color:'#fff' }}>{TITLES[route]}</div>
              <div style={{ fontSize:13, color:'#8FA8B8', marginTop:6 }}>Surface intentionally left blank in this UI kit. Open Dashboard, Devices, or Patching to see live components.</div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
