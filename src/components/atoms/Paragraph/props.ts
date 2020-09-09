import { HTMLAttributes } from 'react';

import { colors } from '../../../core';

export type Props = HTMLAttributes<HTMLParagraphElement> & {
  readonly color?: colors.ColorProp;
};
