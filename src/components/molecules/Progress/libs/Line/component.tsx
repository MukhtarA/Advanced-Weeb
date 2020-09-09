import styled from '@emotion/styled';

import { colors } from '../../../../../core';
import { Props } from '../../props';

export const Line = styled.div<Props>`
  ${({ progress, fillColor }) => `
    height: 100%;
    background-color: ${fillColor || colors.Brand.Primary};
    width: ${progress || 0}%;
    position: absolute;
  `}
`;
