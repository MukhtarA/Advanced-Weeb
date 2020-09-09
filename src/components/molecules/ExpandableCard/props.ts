import { ReactElement, ReactNode } from 'react';

import { ButtonProps } from '../../atoms/Button';
import { CardProps } from '../Card';

export type Props = CardProps & {
  readonly moreButton: ReactElement<ButtonProps> | string;
} & (
    | {
        readonly collapsedChildren: ReactNode;
      }
    | {
        readonly nonExpandable?: boolean;
      }
  );
