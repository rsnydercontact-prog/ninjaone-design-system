export interface RmmAlert {
  kind: 'danger' | 'warn' | 'info';
  title: string;
  detail: string;
  time: string;
}

export declare function AlertList(props: {
  alerts: RmmAlert[];
}): JSX.Element;
