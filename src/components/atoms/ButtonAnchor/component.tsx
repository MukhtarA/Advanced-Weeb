import styled from '@emotion/styled';

import { colors } from '../../../core';
import { Props } from './props';

export const ButtonAnchor = styled.button<Props>`
  background: transparent;
  color: ${({ color }) => color || colors.Brand.Primary};
  font-family: inherit;
  border: 0;
  font-size: 16px;
  padding: 0;
`;
