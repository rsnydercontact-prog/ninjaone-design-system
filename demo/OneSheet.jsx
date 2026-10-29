// Demo — one-sheet composition
// The light hero variant at one-sheet length: intro, capability rail, value
// props, proof points, footer. Content is illustrative.
import { DocHero } from '../src/DocHero.jsx';
import { Callout } from '../src/Callout.jsx';
import { FeatureGrid } from '../src/FeatureGrid.jsx';
import { SectionHeading } from '../src/SectionHeading.jsx';
import { StatCard } from '../src/StatCard.jsx';
import { DocFooter } from '../src/DocFooter.jsx';

const CAPABILITIES = [
  { title:'Agent-based patching', body:'Patch macOS devices on and off the corporate network, without a VPN.' },
  { title:'OS and app updates', body:'Keep macOS and third-party applications current from one policy.' },
  { title:'Deferral controls', body:'Give users a window to defer, then enforce on schedule.' },
  { title:'Compliance reporting', body:'Show patch status by device, group, or organization in seconds.' },
];

const VALUE_PROPS = [
  { title:'One console for every OS', body:'Manage Mac alongside Windows and Linux without a second tool.' },
  { title:'Less end-user disruption', body:'Schedule restarts around working hours and respect deferrals.' },
  { title:'Faster remediation', body:'Close vulnerabilities in days instead of weeks.' },
  { title:'Audit-ready evidence', body:'Export patch history for every device on demand.' },
];

export function OneSheet() {
  return (
    <div className="no-surface-doc" style={{ maxWidth:900, margin:'0 auto', padding:'var(--space-8) var(--space-7)', display:'flex', flexDirection:'column', gap:'var(--space-7)' }}>
      <DocHero
        variant="light"
        title="Agent-based patch management for macOS"
        subtitle="Automated, policy-driven updates for every Mac in the fleet"
      />

      <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr', gap:'var(--space-7)', alignItems:'start' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-6)' }}>
          <p style={{ margin:0, fontSize:'var(--fs-body-lg)', lineHeight:'var(--lh-relaxed)', color:'var(--doc-text)' }}>
            Mac adoption keeps growing, and so does the work of keeping those devices patched. Separate tools,
            manual checks, and users who postpone updates leave gaps that attackers look for.
          </p>
          <p style={{ margin:0, fontSize:'var(--fs-body-lg)', lineHeight:'var(--lh-relaxed)', color:'var(--doc-text)' }}>
            NinjaOne brings macOS patching into the same platform as the rest of the estate, with the same
            policies, reporting, and automation.
          </p>
          <SectionHeading size="h3">Why it matters</SectionHeading>
          <FeatureGrid items={VALUE_PROPS} columns={2} />
        </div>
        <Callout title="Key capabilities" items={CAPABILITIES} />
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-4)' }}>
        <StatCard value="95%" label="Patch compliance" quote="We went from guessing about our Macs to reporting on them every week." source="Northwind IT Services" />
        <StatCard value="4 hrs" label="Saved per week" quote="Mac patching used to be its own project. Now it runs with everything else." source="Contoso Health" />
      </div>

      <DocFooter />
    </div>
  );
}
