import { AnchorHTMLAttributes } from 'react';

import { colors } from '../../../core';

export type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  readonly color?: colors.ColorProp;
};
