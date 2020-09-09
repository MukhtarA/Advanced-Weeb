import { HTMLAttributes } from 'react';

export type Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  readonly color?: string;
  readonly children?: string;
};
