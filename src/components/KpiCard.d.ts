export interface KpiSparkline {
  line: string;
  area: string;
}

export interface KpiCardProps {
  label: string;
  value: string | number;
  /** Delta string, e.g. "↑ 12". */
  delta?: string;
  deltaKind?: 'ok' | 'warn' | 'danger' | 'neutral';
  sub?: string;
  /** SVG path data for the sparkline area + line. */
  sparkline?: KpiSparkline;
  /** Set to 'gradient' to render the value in the brand gradient. */
  accent?: 'gradient';
}

export declare function KpiCard(props: KpiCardProps): JSX.Element;
