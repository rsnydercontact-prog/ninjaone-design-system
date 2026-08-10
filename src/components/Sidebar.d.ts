export interface SidebarProps {
  /** Currently active nav item id. */
  active: string;
  onNavigate?: (id: string) => void;
  /** Wordmark image. Defaults to the green-on-dark mark. */
  logoSrc?: string;
  /** Tenant name shown in the footer card. */
  tenant?: string;
  /** Secondary line under the tenant name, e.g. "Production". */
  tenantSub?: string;
  /** Two-letter avatar initials. */
  tenantInitials?: string;
}

export declare function Sidebar(props: SidebarProps): JSX.Element;
