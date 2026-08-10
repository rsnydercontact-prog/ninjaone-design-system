import type { CSSProperties, ReactNode } from 'react';

/* ── Page furniture ─────────────────────────────────────────── */

export interface DocHeroProps {
  title: ReactNode;
  subtitle?: ReactNode;
  /** "band" = navy filled band + green wordmark. "light" = white ground + blue wordmark. */
  variant?: 'band' | 'light';
  logo?: boolean;
  children?: ReactNode;
}
export declare function DocHero(props: DocHeroProps): JSX.Element;

export interface DocContact {
  region: string;
  value: string;
}
export interface DocFooterProps {
  contacts?: DocContact[];
  email?: string;
}
export declare function DocFooter(props: DocFooterProps): JSX.Element;

export interface GuideCoverProps {
  /** First line of the headline, set in brand green. */
  lead?: string;
  title: ReactNode;
  /** Format chip, bottom right. Pass null to omit. */
  tag?: string | null;
  /** CSS aspect-ratio for the cover panel. */
  ratio?: string;
}
export declare function GuideCover(props: GuideCoverProps): JSX.Element;

export interface GuidePageProps {
  children?: ReactNode;
  /** Uppercase running title in the footer. */
  runningTitle?: string;
  page?: number;
  of?: number;
  ratio?: string;
}
export declare function GuidePage(props: GuidePageProps): JSX.Element;

/* ── Blocks ─────────────────────────────────────────────────── */

export interface SectionHeadingProps {
  children: ReactNode;
  size?: 'h1' | 'h2' | 'h3';
  /** Green underline accent. Defaults to true. */
  accent?: boolean;
  align?: 'left' | 'center';
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;

export interface OverlineProps {
  children: ReactNode;
  color?: string;
  style?: CSSProperties;
}
export declare function Overline(props: OverlineProps): JSX.Element;

export interface FeatureItem {
  title: string;
  body: ReactNode;
}
export interface FeatureGridProps {
  items: FeatureItem[];
  columns?: number;
  size?: 'small' | 'body';
}
export declare function FeatureGrid(props: FeatureGridProps): JSX.Element;

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
  /** Icon names for the OS row. */
  osIcons?: string[];
  tagline?: string;
}
export declare function PlatformDiagram(props: PlatformDiagramProps): JSX.Element;

export interface LogoWallLogo {
  name: string;
  /** Image URL. Falls back to the first letter when absent. */
  src?: string;
}
export interface LogoWallProps {
  title?: string;
  logos: LogoWallLogo[];
  columns?: number;
  footnote?: ReactNode;
}
export declare function LogoWall(props: LogoWallProps): JSX.Element;

export interface TagProps {
  children: ReactNode;
  tone?: 'green' | 'navy' | 'blue' | 'mint';
}
export declare function Tag(props: TagProps): JSX.Element;

/* ── Motifs ─────────────────────────────────────────────────── */

export interface ChevronsProps {
  color?: string;
  height?: number;
  count?: number;
  opacity?: number;
}
export declare function Chevrons(props: ChevronsProps): JSX.Element;

/** [column, row, kind] — kind is 'flat', 'lit', or 'node:<dot|triangle|diamond|caret>'. */
export type DotGridNode = [number, number, string];
export interface DotGridProps {
  columns?: number;
  rows?: number;
  nodes?: DotGridNode[];
  flat?: string;
  lit?: string;
  ring?: string;
  shape?: string;
  gridLine?: string;
  cell?: number;
}
export declare function DotGrid(props: DotGridProps): JSX.Element;

export * from './Icon';

/* ── Worked examples ────────────────────────────────────────── */

/** The Patch Manager datasheet, rebuilt from the kit. Takes no props. */
export declare function Datasheet(): JSX.Element;

/** Guide cover plus interior spread, rebuilt from the kit. Takes no props. */
export declare function Guide(): JSX.Element;
