// NinjaOne Design System — entry point.
//
// Tokens are not bundled here; load them once, globally:
//   import 'ninjaone-design-system/tokens/tokens.css'
//
// Two surfaces:
//   · product   — dark RMM console components (below)
//   · marketing — light datasheet/document components ('./marketing/index.js')

// Product (dark surface)
export { Button } from './components/Button.jsx';
export { Pill } from './components/Pill.jsx';
export { Icon, registerIcons } from './components/Icon.jsx';
export { KpiCard } from './components/KpiCard.jsx';
export { AlertList } from './components/AlertList.jsx';
export { DeviceTable } from './components/DeviceTable.jsx';
export { DeviceDetail } from './components/DeviceDetail.jsx';
export { PatchPanel } from './components/PatchPanel.jsx';
export { Sidebar } from './components/Sidebar.jsx';
export { TopBar } from './components/TopBar.jsx';
export { App } from './components/App.jsx';

// Marketing (light surface)
export {
  DocHero,
  Chevrons,
  Overline,
  SpecTable,
  Callout,
  StatCard,
  PullQuote,
  PlatformDiagram,
  DocFooter,
  Datasheet,
} from './marketing/index.js';
