import type { CSSProperties } from 'react';

export interface IconProps {
  /** Lucide icon name in kebab-case, e.g. "shield-check". */
  name: string;
  /** Pixel size. Product UI uses 14–18. */
  size?: number;
  /** Stroke color. Defaults to `currentColor` so icons inherit text color. */
  color?: string;
  /** Stroke width. Brand standard is 2. */
  strokeWidth?: number;
  style?: CSSProperties;
}

/** Renders an icon from the kit's registered set. Returns null for unknown names. */
export declare function Icon(props: IconProps): JSX.Element | null;

/** Add Lucide (or any compatible) icon components to the kit's set. Call once, before render. */
export declare function registerIcons(icons: Record<string, unknown>): void;
