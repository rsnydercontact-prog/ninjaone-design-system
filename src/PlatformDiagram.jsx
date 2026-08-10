// NinjaOne marketing — platform diagram
// The recurring "Manage / Protect / Support → endpoints → platform" figure.
// Appears in the Patch Manager, Vulnerability, and macOS one-sheets.
import { Icon } from './Icon.jsx';

const DEFAULT_PILLARS = [
  { title: 'Manage',  body: 'Monitor and manage every endpoint' },
  { title: 'Protect', body: 'Patch and back up endpoints' },
  { title: 'Support', body: 'Support every employee' },
];

const DEFAULT_ENDPOINTS = ['Servers', 'Workstations', 'Laptops', 'Tablets', 'Smartphones', 'Hosts', 'Networks'];

const DEFAULT_CAPABILITIES = ['Policy-Based Automation', 'Unified Reporting & Analytics', 'Multi-Tenant Architecture', 'API & Integrations'];

export function PlatformDiagram({
  pillars = DEFAULT_PILLARS,
  endpoints = DEFAULT_ENDPOINTS,
  capabilities = DEFAULT_CAPABILITIES,
  platformName = 'NinjaOne Automated Endpoint Management Platform',
  osIcons = ['monitor', 'apple', 'terminal', 'smartphone', 'server'],
  tagline = 'Human-centered AI',
}) {
  return (
    <div style={{
      background:'var(--paper)',
      border:'1px solid var(--mist-4)',
      borderRadius:'var(--radius-doc)',
      padding:'var(--space-6)',
      fontFamily:'var(--font-sans)',
      display:'flex',
      flexDirection:'column',
      gap:'var(--space-3)',
    }}>
      <div style={{ display:'grid', gridTemplateColumns:`repeat(${pillars.length}, 1fr)`, gap:'var(--space-3)' }}>
        {pillars.map(p => (
          <div key={p.title} style={{
            background:'var(--wash-cyan)',
            borderRadius:'var(--radius-lg)',
            padding:'var(--space-5) var(--space-4)',
            textAlign:'center',
          }}>
            <div style={{
              fontSize:'var(--fs-body-lg)',
              fontWeight:'var(--fw-semibold)',
              color:'var(--doc-text)',
              paddingBottom:'var(--space-2)',
              borderBottom:'2px solid var(--ninja-green)',
              display:'inline-block',
            }}>{p.title}</div>
            <div style={{ fontSize:'var(--fs-caption)', color:'var(--doc-text)', marginTop:'var(--space-3)' }}>{p.body}</div>
          </div>
        ))}
      </div>

      <div style={{
        background:'var(--wash-mint)',
        borderRadius:'var(--radius-lg)',
        padding:'var(--space-3) var(--space-4)',
        display:'flex',
        alignItems:'center',
        gap:'var(--space-4)',
      }}>
        <div style={{ display:'flex', gap:'var(--space-2)' }}>
          {osIcons.map(name => (
            <div key={name} style={{
              width:28, height:28, borderRadius:'var(--radius-sm)',
              background:'var(--paper)',
              display:'flex', alignItems:'center', justifyContent:'center',
            }}>
              <Icon name={name} size={14} color="var(--doc-text)" />
            </div>
          ))}
        </div>
        <div style={{
          display:'flex', flexWrap:'wrap', gap:'var(--space-3)',
          fontSize:'var(--fs-overline)',
          fontWeight:'var(--fw-medium)',
          letterSpacing:'var(--ls-overline)',
          textTransform:'uppercase',
          color:'var(--doc-text)',
        }}>
          {endpoints.map((e, i) => (
            <span key={e}>
              {e}
              {i < endpoints.length - 1 && <span style={{ color:'var(--mist-2)', marginLeft:'var(--space-3)' }}>|</span>}
            </span>
          ))}
        </div>
      </div>

      <div style={{
        background:'var(--doc-band)',
        borderRadius:'var(--radius-lg)',
        padding:'var(--space-5) var(--space-4) var(--space-4)',
        textAlign:'center',
      }}>
        <div style={{ fontSize:'var(--fs-h4)', fontWeight:'var(--fw-semibold)', color:'var(--doc-on-band)' }}>{platformName}</div>
        <div style={{ display:'grid', gridTemplateColumns:`repeat(${capabilities.length}, 1fr)`, gap:'var(--space-3)', marginTop:'var(--space-4)' }}>
          {capabilities.map(c => (
            <div key={c} style={{
              border:'1px solid rgba(255,255,255,0.28)',
              borderRadius:'var(--radius-md)',
              padding:'var(--space-3) var(--space-2)',
              fontSize:'var(--fs-caption)',
              color:'var(--doc-on-band)',
            }}>{c}</div>
          ))}
        </div>
        <div style={{
          marginTop:'var(--space-4)',
          fontSize:'var(--fs-overline)',
          fontWeight:'var(--fw-medium)',
          letterSpacing:'var(--ls-overline)',
          textTransform:'uppercase',
          color:'var(--doc-on-band-muted)',
        }}>{tagline}</div>
      </div>
    </div>
  );
}
