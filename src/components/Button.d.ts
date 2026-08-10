import type { ReactNode } from 'react';

export interface ButtonProps {
  /** Visual style. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** Control size. */
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
  onClick?: () => void;
  /** Lucide icon name rendered before the label. */
  icon?: string;
}

export declare function Button(props: ButtonProps): JSX.Element;
