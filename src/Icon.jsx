// NinjaOne RMM — Icon
// Components name icons as kebab-case strings ("shield-check") the way the
// brand spec does. The kit ships a curated set — statically imported so it
// renders on first paint and tree-shakes to just what you use. To use a Lucide
// icon that isn't here, register it once at startup:
//
//   import { Rocket } from 'lucide-react';
//   registerIcons({ 'rocket': Rocket });
//
// Spec: 2px stroke, 14–18px, inherits text color. Brand green is reserved for
// active and positive states.
import {
  Apple, BarChart3, Bell, Check, CircleHelp, Filter, HardDrive, Inbox, Laptop,
  LayoutDashboard, Minus, Monitor, Plus, Search, Server, Settings, ShieldCheck,
  Smartphone, Terminal, X,
} from 'lucide-react';

const REGISTRY = {
  'apple': Apple,
  'bar-chart-3': BarChart3,
  'bell': Bell,
  'check': Check,
  'circle-help': CircleHelp,
  'filter': Filter,
  'hard-drive': HardDrive,
  'inbox': Inbox,
  'laptop': Laptop,
  'layout-dashboard': LayoutDashboard,
  'minus': Minus,
  'monitor': Monitor,
  'plus': Plus,
  'search': Search,
  'server': Server,
  'settings': Settings,
  'shield-check': ShieldCheck,
  'smartphone': Smartphone,
  'terminal': Terminal,
  'x': X,
};

/** Add icons to the kit's set. Call once, before render. */
export function registerIcons(icons) {
  Object.assign(REGISTRY, icons);
}

export function Icon({ name, size = 16, color = 'currentColor', strokeWidth = 2, style }) {
  const Registered = REGISTRY[name];
  if (!Registered) {
    if (import.meta.env?.DEV) console.warn(`[NinjaOne] Unregistered icon "${name}" — pass it to registerIcons().`);
    return null;
  }
  return <Registered size={size} color={color} strokeWidth={strokeWidth} style={{ flexShrink: 0, ...style }} />;
}
