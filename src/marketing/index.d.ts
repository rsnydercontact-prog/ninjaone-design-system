import type { CSSProperties, ReactNode } from 'react';

export interface DocHeroProps {
  title: ReactNode;
  subtitle?: ReactNode;
  /** "band" = navy filled band + green wordmark. "light" = white ground + blue wordmark. */
  variant?: 'band' | 'light';
  /** Render the wordmark. Defaults to true. */
  logo?: boolean;
  children?: ReactNode;
}
export declare function DocHero(props: DocHeroProps): JSX.Element;

export interface ChevronsProps {
  color?: string;
  height?: number;
  count?: number;
  opacity?: number;
}
export declare function Chevrons(props: ChevronsProps): JSX.Element;

export interface OverlineProps {
  children: ReactNode;
  color?: string;
  style?: CSSProperties;
}
export declare function Overline(props: OverlineProps): JSX.Element;

export interface SpecRow {
  label: string;
  /** false renders a muted dash instead of the green check. Defaults to true. */
  included?: boolean;
  /** Qualifying text rendered in place of the check, e.g. "Patching modules only". */
  note?: string;
}
export interface SpecTableProps {
  columns?: [string, string];
  rows: SpecRow[];
}
export declare function SpecTable(props: SpecTableProps): JSX.Element;

export interface CalloutItem {
  title: string;
  body: ReactNode;
}
export interface CalloutProps {
  /** Uppercase overline above the card. */
  title?: string;
  /** Blue sentence-case heading. Use instead of `title`, not with it. */
  heading?: string;
  items?: CalloutItem[];
  tone?: 'mint' | 'cyan' | 'flat';
  children?: ReactNode;
}
export declare function Callout(props: CalloutProps): JSX.Element;

export interface StatCardProps {
  value: ReactNode;
  label: string;
  quote?: string;
  source?: string;
}
export declare function StatCard(props: StatCardProps): JSX.Element;

export interface PullQuoteProps {
  quote: string;
  role?: string;
  company?: string;
}
export declare function PullQuote(props: PullQuoteProps): JSX.Element;

export interface PlatformPillar {
  title: string;
  body: string;
}
export interface PlatformDiagramProps {
  pillars?: PlatformPillar[];
  endpoints?: string[];
  capabilities?: string[];
  platformName?: string;
  /** Lucide icon names for the OS row. */
  osIcons?: string[];
  tagline?: string;
}
export declare function PlatformDiagram(props: PlatformDiagramProps): JSX.Element;

export interface DocContact {
  region: string;
  value: string;
}
export interface DocFooterProps {
  contacts?: DocContact[];
  email?: string;
}
export declare function DocFooter(props: DocFooterProps): JSX.Element;

/** Full datasheet page composed from the marketing layer. Takes no props. */
export declare function Datasheet(): JSX.Element;
