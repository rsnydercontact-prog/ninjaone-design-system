// NinjaOne marketing — full datasheet composition
// A worked example: this is the Patch Manager datasheet rebuilt from the kit,
// and the reference for how the marketing components sit together on a page.
import { DocHero } from './DocHero.jsx';
import { Callout } from './Callout.jsx';
import { SpecTable } from './SpecTable.jsx';
import { StatCard } from './StatCard.jsx';
import { PullQuote } from './PullQuote.jsx';
import { PlatformDiagram } from './PlatformDiagram.jsx';
import { DocFooter } from './DocFooter.jsx';
import { Overline } from './Overline.jsx';

const CAPABILITIES = [
  { title:'Cross-OS & app patching', body:'Automate updates for Windows, macOS, Linux, and 6,000+ third-party applications.' },
  { title:'Patch Intelligence AI', body:'Analyze telemetry and pause unstable patches before they cause disruption.' },
  { title:'Vulnerability importing', body:'Ingest CVE/CVSS data from scanners to prioritize remediation by risk.' },
  { title:'Patch Caching', body:'Distribute patches efficiently across large sites and remote users.' },
  { title:'Policy-driven automation', body:'Define flexible rules, with manual overrides for zero-day or urgent threats.' },
];

const FEATURES = [
  { label:'Windows, macOS, Linux OS patching' },
  { label:'Third party application patching' },
  { label:'WinGet-Based Windows third party patching' },
  { label:'Device Details / Search Grid; Dynamic Groups' },
  { label:'Device Reporting' },
  { label:'Policy Management', note:'Patching modules only' },
  { label:'Patch Intelligence AI' },
  { label:'RBAC, SSO, SCIM' },
  { label:'Vulnerability Scanning Integrations' },
  { label:'Application Inventory and Deployment' },
  { label:'Patch Caching' },
];

const VALUE_PROPS = [
  { title:'Reduce security risk', body:'Close vulnerabilities faster and shrink exposure windows.' },
  { title:'Minimize operational risk', body:'Eliminate failed patch disruptions with AI-driven assurance.' },
  { title:'Save time and resources', body:'Automate repetitive tasks and cut wasted troubleshooting hours.' },
  { title:'Strengthen your security stack', body:'Reduce noise so EDR, SIEM, and firewalls can focus on novel threats.' },
  { title:'Scale with confidence', body:'Consistent patching across thousands of endpoints without added infrastructure.' },
];

const STATS = [
  { value:'10-15', label:'Tools replaced', quote:'Before, I needed 10-15 different tools to execute what NinjaOne does in its centralized, single pane of glass.', source:'Vetcor' },
  { value:'98%',   label:'CSAT score',     quote:'I have never experienced the speed or knowledge of support the NinjaOne team exhibited with any other RMM vendor.', source:'InHouse Support' },
  { value:'30%',   label:'Less time for patching', quote:'We observed a 30% reduction in the time taken for patch deployments compared to our previous solution.', source:'Alabbar Group' },
];

export function Datasheet() {
  return (
    <div className="no-surface-doc" style={{ maxWidth:900, margin:'0 auto', padding:'var(--space-8) var(--space-7)', display:'flex', flexDirection:'column', gap:'var(--space-8)' }}>
      <DocHero
        variant="band"
        title="Patch Manager"
        subtitle="Simplified, autonomous patching for environments with 3,000+ endpoints"
      />

      <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr', gap:'var(--space-7)', alignItems:'start' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-6)' }}>
          <p style={{ margin:0, fontSize:'var(--fs-body-lg)', lineHeight:'var(--lh-relaxed)', color:'var(--doc-text)' }}>
            Consistent patching is one of the most effective ways to reduce cyber risk yet it’s also one of the
            most time-consuming and disruptive tasks for IT teams. Manual workflows, failed updates, and siloed
            tools leave endpoints exposed while wasting valuable staff hours.
          </p>
          <p style={{ margin:0, fontSize:'var(--fs-body-lg)', lineHeight:'var(--lh-relaxed)', color:'var(--doc-text)' }}>
            NinjaOne Patch Manager transforms patching with automation, intelligence, and enterprise-scale
            controls. Purpose-built for organizations with 3,000+ endpoints, it delivers secure, stable, and
            simplified patching across operating systems and applications all from a single platform.
          </p>
          <SpecTable rows={FEATURES} />
        </div>

        <Callout title="Key capabilities at a glance" items={CAPABILITIES} />
      </div>

      <section style={{ background:'var(--mist-6)', borderRadius:'var(--radius-doc)', padding:'var(--space-7)' }}>
        <h2 style={{ margin:0, fontSize:'var(--fs-h3)', fontWeight:'var(--fw-semibold)', color:'var(--doc-subheading)' }}>
          Why NinjaOne Patch Manager?
        </h2>
        <div style={{ height:1, background:'var(--mist-2)', margin:'var(--space-5) 0' }} />
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'var(--space-7)' }}>
          <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-4)' }}>
            {VALUE_PROPS.slice(0, 3).map(v => <ValueProp key={v.title} {...v} />)}
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-4)' }}>
            {VALUE_PROPS.slice(3).map(v => <ValueProp key={v.title} {...v} />)}
          </div>
          <PullQuote
            quote="Patch automation was transformative for our IT team. What once took weeks with WSUS now runs seamlessly with NinjaOne—every device updated, no blind spots, and far less disruption."
            role="CISO"
            company="Fortune 100 financial institution"
          />
        </div>
      </section>

      <section style={{ textAlign:'center' }}>
        <h2 style={{ margin:0, fontSize:'var(--fs-h3)', fontWeight:'var(--fw-semibold)', color:'var(--doc-subheading)' }}>Why NinjaOne?</h2>
        <p style={{ maxWidth:640, margin:'var(--space-5) auto 0', fontSize:'var(--fs-body-lg)', lineHeight:'var(--lh-relaxed)', color:'var(--doc-text)' }}>
          NinjaOne, the automated endpoint management platform, delivers visibility, security, and control over
          all endpoints for more than 30,000 customers in 130+ countries. It is proven to increase productivity,
          reduce security risk, and lower costs.
        </p>
      </section>

      <PlatformDiagram />

      <section>
        <Overline style={{ marginBottom:'var(--space-4)' }}>Proof points</Overline>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'var(--space-4)' }}>
          {STATS.map(s => <StatCard key={s.label} {...s} />)}
        </div>
      </section>

      <DocFooter />
    </div>
  );
}

function ValueProp({ title, body }) {
  return (
    <div>
      <div style={{ fontSize:'var(--fs-small)', fontWeight:'var(--fw-semibold)', color:'var(--doc-text)' }}>{title}</div>
      <p style={{ margin:'2px 0 0', fontSize:'var(--fs-small)', lineHeight:'var(--lh-normal)', color:'var(--doc-text)' }}>{body}</p>
    </div>
  );
}
