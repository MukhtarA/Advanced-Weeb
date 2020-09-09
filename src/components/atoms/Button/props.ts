import { ButtonHTMLAttributes } from 'react';

import { colors } from '../../../core';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  readonly color?: colors.ColorProp;
  readonly background?: colors.ColorProp;
  readonly disableBorder?: boolean;
};
