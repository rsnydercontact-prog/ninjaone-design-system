export interface RmmDevice {
  id: string;
  name: string;
  icon?: string;
  status: string;
  statusKind: 'ok' | 'info' | 'warn' | 'danger' | 'neutral' | 'brand';
  os: string;
  site: string;
  lastSeen: string;
  cpu: string;
  ram: string;
}

export declare function DeviceTable(props: {
  devices: RmmDevice[];
  onSelect?: (id: string) => void;
  selectedId?: string | null;
}): JSX.Element;
