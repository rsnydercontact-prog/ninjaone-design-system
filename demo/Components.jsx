// Demo — component gallery
// Each building block on its own, labelled with its export name.
import { Fragment } from 'react';
import { SectionHeading } from '../src/SectionHeading.jsx';
import { Overline } from '../src/Overline.jsx';
import { FeatureGrid } from '../src/FeatureGrid.jsx';
import { SpecTable } from '../src/SpecTable.jsx';
import { Callout } from '../src/Callout.jsx';
import { StatCard } from '../src/StatCard.jsx';
import { PullQuote } from '../src/PullQuote.jsx';
import { Tag } from '../src/Tag.jsx';
import { Chevrons } from '../src/Chevrons.jsx';
import { DotGrid } from '../src/DotGrid.jsx';
import { Icon } from '../src/Icon.jsx';

const label = {
  fontFamily:'var(--font-mono)', fontSize:12, color:'var(--mist-1)',
  marginBottom:'var(--space-3)',
};

function Item({ name, children, span = 1 }) {
  return (
    <div style={{ gridColumn:`span ${span}` }}>
      <div style={label}>{`<${name} />`}</div>
      {children}
    </div>
  );
}

const ICONS = ['shield-check', 'server', 'laptop', 'monitor', 'apple', 'terminal', 'bell', 'bar-chart-3', 'search', 'settings'];

export function Components() {
  return (
    <div className="no-surface-doc" style={{ maxWidth:1080, margin:'0 auto', padding:'var(--space-8) var(--space-7)' }}>
      <Overline>NinjaOne Design System</Overline>
      <h1 className="no-h1" style={{ margin:'var(--space-2) 0 var(--space-7)', color:'var(--doc-heading)' }}>Components</h1>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-8) var(--space-7)', alignItems:'start' }}>
        <Item name="SectionHeading">
          <SectionHeading size="h2">Reduce security risk</SectionHeading>
        </Item>
        <Item name="Overline / Tag">
          <Overline style={{ marginBottom:'var(--space-4)' }}>Proof points</Overline>
          <div style={{ display:'flex', gap:'var(--space-3)', flexWrap:'wrap' }}>
            {['green', 'navy', 'blue', 'mint'].map((t, i) => (
              <Tag key={t} tone={t}>{['Guide', 'Datasheet', 'Report', 'One-sheet'][i]}</Tag>
            ))}
          </div>
        </Item>

        <Item name="FeatureGrid" span={2}>
          <FeatureGrid columns={3} items={[
            { title:'Reduce security risk', body:'Close vulnerabilities faster and shrink exposure windows.' },
            { title:'Save time', body:'Automate repetitive tasks and cut troubleshooting hours.' },
            { title:'Scale with confidence', body:'Consistent results across thousands of endpoints.' },
          ]} />
        </Item>

        <Item name="SpecTable">
          <SpecTable rows={[
            { label:'Windows, macOS, Linux OS patching' },
            { label:'Third-party application patching' },
            { label:'Policy management', note:'Patching modules only' },
            { label:'RBAC, SSO, SCIM' },
          ]} />
        </Item>
        <Item name="Callout">
          <Callout title="Key capabilities" items={[
            { title:'Policy-driven automation', body:'Flexible rules with manual overrides for urgent threats.' },
            { title:'Vulnerability importing', body:'Ingest CVE data to prioritize remediation by risk.' },
          ]} />
        </Item>

        <Item name="StatCard">
          <StatCard value="30%" label="Less time for patching" quote="Patch deployments take a third less time than with our previous tool." source="Fabrikam Group" />
        </Item>
        <Item name="PullQuote">
          <PullQuote quote="Every device updated, no blind spots, and far less disruption." role="IT Director" company="Contoso Health" />
        </Item>

        <Item name="Chevrons">
          <div style={{ background:'var(--ninja-navy)', borderRadius:'var(--radius-doc)', padding:'var(--space-6)', overflow:'hidden' }}>
            <Chevrons color="rgba(255,255,255,0.18)" height={88} />
          </div>
        </Item>
        <Item name="DotGrid">
          <div style={{ background:'var(--ninja-navy)', borderRadius:'var(--radius-doc)', padding:'var(--space-6)' }}>
            <DotGrid />
          </div>
        </Item>

        <Item name="Icon" span={2}>
          <div style={{ display:'flex', gap:'var(--space-6)', flexWrap:'wrap', color:'var(--doc-heading)' }}>
            {ICONS.map(n => (
              <Fragment key={n}>
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'var(--space-2)' }}>
                  <Icon name={n} size={22} />
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--mist-1)' }}>{n}</span>
                </div>
              </Fragment>
            ))}
          </div>
        </Item>
      </div>
    </div>
  );
}
