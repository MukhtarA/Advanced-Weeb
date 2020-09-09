import { HTMLAttributes } from 'react';

export type Props = Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onClick'> & {
  readonly onClick: (path: string) => void;
  readonly basePath: string;
  readonly perPage: number;
  readonly count: number;
  readonly active?: number;
};
