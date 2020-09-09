import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  readonly columns: number;
  readonly gap?: string | number;
};
