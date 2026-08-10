// NinjaOne — long-form guide composition
// Cover plus an interior spread, rebuilt from the Essential Guide to Autonomous
// Patch Management. The reference for how the guide format goes together.
import { GuideCover } from './GuideCover.jsx';
import { GuidePage } from './GuidePage.jsx';
import { SectionHeading } from './SectionHeading.jsx';
import { FeatureGrid } from './FeatureGrid.jsx';
import { Callout } from './Callout.jsx';

const RUNNING_TITLE = 'Essential Guide to Autonomous Patch Management';

const PILLARS = [
  { title:'Security-first prioritization', body:'Rank by exploitability and exposure, not by release date.' },
  { title:'AI-driven stability analysis', body:'Hold patches that are destabilizing fleets elsewhere before they reach yours.' },
  { title:'Policy-driven automation', body:'One set of rules across OS and third-party applications, with room for overrides.' },
  { title:'Closed-loop verification', body:'Confirm remediation on the endpoint rather than trusting the deployment record.' },
];

const body = {
  margin:'0 0 var(--space-5)',
  fontSize:'var(--fs-body-lg)',
  lineHeight:'var(--lh-relaxed)',
  color:'var(--doc-subheading)',
};

export function Guide() {
  return (
    <div className="no-surface-doc" style={{
      maxWidth:1180, margin:'0 auto',
      padding:'var(--space-8) var(--space-7)',
      display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-7)',
      alignItems:'start',
    }}>
      <GuideCover
        lead="Essential Guide"
        title="to Autonomous Patch Management"
        tag="Guide"
      />

      <GuidePage runningTitle={RUNNING_TITLE} page={2} of={8}>
        <SectionHeading>The patch management dilemma</SectionHeading>
        <div style={{ marginTop:'var(--space-6)' }}>
          <p style={body}>
            Patch management has always been a balancing act: move too slowly and vulnerabilities remain
            exploitable; move too quickly and faulty patches disrupt operations. Meanwhile, IT teams face
            constant security threats, tighter compliance standards, and an ever-growing device footprint.
          </p>
          <p style={{ ...body, marginBottom:0 }}>
            Manual patching can’t keep up, and even basic automation still requires careful supervision.
            Autonomous Patch Management makes this trade-off a thing of the past.
          </p>
        </div>
      </GuidePage>

      <GuidePage runningTitle={RUNNING_TITLE} page={3} of={8}>
        <SectionHeading size="h2">What makes patching autonomous</SectionHeading>
        <div style={{ marginTop:'var(--space-6)' }}>
          <FeatureGrid items={PILLARS} columns={1} size="body" />
        </div>
      </GuidePage>

      <GuidePage runningTitle={RUNNING_TITLE} page={4} of={8}>
        <SectionHeading size="h2">Where teams get stuck</SectionHeading>
        <div style={{ marginTop:'var(--space-6)' }}>
          <p style={body}>
            Most patch programs fail in the gap between detection and execution — the scanner finds it, the
            ticket sits, and the exposure window stays open.
          </p>
          <Callout
            heading="Close the loop"
            items={[
              { title:'Detect continuously', body:'Correlate live endpoint state with CVE intelligence instead of periodic scans.' },
              { title:'Execute on the same system', body:'Remediate where the vulnerability was found — no hand-off, no re-import.' },
            ]}
          />
        </div>
      </GuidePage>
    </div>
  );
}
