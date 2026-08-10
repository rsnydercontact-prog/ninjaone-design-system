import type { RmmDevice } from './DeviceTable';

export interface DeviceDetailProps {
  device: RmmDevice | null;
  onClose?: () => void;
}

export declare function DeviceDetail(props: DeviceDetailProps): JSX.Element | null;
