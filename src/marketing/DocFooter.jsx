// NinjaOne marketing — document footer
// Regional contact line, slash-separated, bold country codes. Closes every
// page of every datasheet.
import { Fragment } from 'react';

const DEFAULT_CONTACTS = [
  { region: 'US', value: '(888) 542-8339' },
  { region: 'DE', value: '+49 (0)30-76758700' },
  { region: 'UK', value: '+44 (0)20 3880 9027' },
  { region: 'FR', value: '+33 (0)800 91 09 90' },
  { region: 'AU', value: '+61 1800 490 516' },
];

export function DocFooter({ contacts = DEFAULT_CONTACTS, email = 'sales@ninjaone.com' }) {
  return (
    <footer style={{
      borderTop:'1px solid var(--mist-4)',
      paddingTop:'var(--space-4)',
      display:'flex',
      flexWrap:'wrap',
      gap:'6px',
      alignItems:'center',
      justifyContent:'center',
      fontFamily:'var(--font-sans)',
      fontSize:'var(--fs-caption)',
      color:'var(--doc-text)',
    }}>
      {contacts.map((c, i) => (
        <Fragment key={c.region}>
          <span><strong style={{ fontWeight:'var(--fw-bold)' }}>{c.region}</strong> {c.value}</span>
          <span style={{ color:'var(--mist-2)' }}>/</span>
          {i === contacts.length - 1 && <span>{email}</span>}
        </Fragment>
      ))}
    </footer>
  );
}
