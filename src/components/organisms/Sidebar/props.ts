import { ReactElement, ReactNode } from 'react';

import { ExpandableCardProps } from '../../molecules/ExpandableCard';
import { Item } from './types/Item';

export type Props = Omit<
  ExpandableCardProps,
  'children' | 'collapsedChildren' | 'nonExpandable'
> & {
  readonly header?: ReactNode;
  readonly nonExpandable?: boolean;
} & (
    | {
        readonly children: ReadonlyArray<ReactElement>;
        readonly collapsedChildren: ReactNode;
      }
    | {
        readonly items: ReadonlyArray<Item>;
        readonly handler: (link: string) => void;
      }
  );
