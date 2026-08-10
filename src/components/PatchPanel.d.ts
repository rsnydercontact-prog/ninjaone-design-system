export interface PatchRow {
  cve: string;
  sev: 'critical' | 'high' | 'medium' | 'low';
  title: string;
  count: number;
  vendor: string;
}

export interface PatchPanelProps {
  /** Outstanding patches. Falls back to a built-in demo set. */
  patches?: PatchRow[];
}

export declare function PatchPanel(props?: PatchPanelProps): JSX.Element;
