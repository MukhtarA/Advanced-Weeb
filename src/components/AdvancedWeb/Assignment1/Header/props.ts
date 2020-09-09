import { HTMLAttributes, ReactNode } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  readonly logo?: ReactNode;
  readonly links?: Record<string, string>;
};
