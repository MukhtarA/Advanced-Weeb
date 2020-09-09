import { HTMLAttributes } from 'react';

export type Props = Omit<HTMLAttributes<HTMLDivElement>, 'height'> & {
  readonly progress: number;
  readonly color?: string;
  readonly fillColor?: string;
  readonly height?: string;
};
