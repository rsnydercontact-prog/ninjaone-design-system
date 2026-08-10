import type { ReactNode } from 'react';

export interface PillProps {
  /** Status color. */
  kind?: 'ok' | 'info' | 'warn' | 'danger' | 'neutral' | 'brand';
  children?: ReactNode;
  /** Show the leading status dot. */
  dot?: boolean;
}

export declare function Pill(props: PillProps): JSX.Element;
