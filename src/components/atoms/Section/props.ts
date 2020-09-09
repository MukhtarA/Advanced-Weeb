import { HTMLAttributes } from 'react';

import { HeadingProps } from '../Heading';

export type Props = HTMLAttributes<HTMLDivElement> &
  Required<Pick<HeadingProps, 'as'>> & {
    readonly title?: string;
  };
