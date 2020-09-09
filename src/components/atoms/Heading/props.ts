import { HTMLAttributes } from 'react';

import { colors } from '../../../core';
import { HeadingElementType } from './types/HeadingElementType';

export type Props = HTMLAttributes<HTMLElement> & {
  readonly color?: colors.ColorProp;
  readonly as: HeadingElementType;
};
