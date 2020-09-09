import { ReactNode } from 'react';

import { CardProps } from '../Card';

export type Props = CardProps & {
  readonly icon?: ReactNode;
  readonly title?: ReactNode;
};
