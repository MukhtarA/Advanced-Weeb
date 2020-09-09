import styled from '@emotion/styled';

import { colors } from '../../../core';
import { Props } from './props';

export const Card = styled.div<Props>`
  ${({ background, color, disableBorder, borderColor }) => `
      background-color: ${background || colors.Background.White};
      color: ${color || colors.Text.Dark};
      border-radius: 4px;
      ${disableBorder || `border: 1px solid ${borderColor || colors.Background.Grey}`};
   `}
`;
