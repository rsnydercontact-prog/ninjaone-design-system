// NinjaOne RMM — Button
import { useState } from 'react';
import { Icon } from './Icon.jsx';

export function Button({ variant = 'primary', size = 'md', children, onClick, icon }) {
  const sizeMap = {
    sm: { padding:'6px 12px', fontSize:13 },
    md: { padding:'8px 16px', fontSize:14 },
    lg: { padding:'10px 20px', fontSize:15 },
  }[size];
  const variantMap = {
    primary:   { background:'#04FF88', color:'#04111D', border:'1px solid transparent' },
    secondary: { background:'transparent', color:'#fff', border:'1px solid rgba(255,255,255,0.24)' },
    ghost:     { background:'transparent', color:'#B8C8D2', border:'1px solid transparent' },
    danger:    { background:'#E5484D', color:'#fff', border:'1px solid transparent' },
  }[variant];
  const [hover, setHover] = useState(false);
  const hoverShade = {
    primary:   { background:'#3DFFA0' },
    secondary: { background:'rgba(255,255,255,0.04)' },
    ghost:     { background:'rgba(255,255,255,0.04)' },
    danger:    { background:'#EE6A6E' },
  }[variant];
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        ...sizeMap, ...variantMap, ...(hover ? hoverShade : {}),
        fontFamily:'Inter, sans-serif', fontWeight:600,
        borderRadius:6, cursor:'pointer',
        display:'inline-flex', alignItems:'center', gap:6,
        letterSpacing:'-0.005em',
        transition:'background 160ms cubic-bezier(0.2,0.8,0.2,1)',
      }}>
      {icon && <Icon name={icon} size={14} />}
      {children}
    </button>
  );
}
