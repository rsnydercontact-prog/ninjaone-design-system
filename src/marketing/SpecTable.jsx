// NinjaOne marketing — feature / included table
// Green rule under the header row, hairline rules between rows, green check
// for included, small-caps note text for qualified answers.
import { Icon } from '../components/Icon.jsx';

export function SpecTable({ columns = ['Feature', 'Included'], rows }) {
  const cell = {
    padding:'11px 4px',
    borderBottom:'1px solid var(--mist-2)',
    fontSize:'var(--fs-small)',
    color:'var(--doc-text)',
  };
  return (
    <table style={{ width:'100%', borderCollapse:'collapse', fontFamily:'var(--font-sans)' }}>
      <thead>
        <tr>
          {columns.map((c, i) => (
            <th key={c} style={{
              textAlign: i === 0 ? 'left' : 'right',
              padding:'0 4px 10px',
              borderBottom:'2px solid var(--doc-rule-strong)',
              fontSize:'var(--fs-overline)',
              fontWeight:'var(--fw-semibold)',
              letterSpacing:'var(--ls-overline)',
              textTransform:'uppercase',
              color:'var(--doc-overline)',
            }}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row.label}>
            <td style={cell}>{row.label}</td>
            <td style={{ ...cell, textAlign:'right' }}>
              {row.note ? (
                <span style={{
                  fontSize:'9px',
                  fontWeight:'var(--fw-semibold)',
                  letterSpacing:'var(--ls-overline)',
                  textTransform:'uppercase',
                  color:'var(--doc-text-muted)',
                }}>{row.note}</span>
              ) : row.included === false ? (
                <Icon name="minus" size={14} color="var(--mist-2)" style={{ display:'inline-block', verticalAlign:'middle' }} />
              ) : (
                <Icon name="check" size={15} color="var(--ninja-green-check)" strokeWidth={3} style={{ display:'inline-block', verticalAlign:'middle' }} />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
