import styled from '@emotion/styled';

import { colors } from '../../../core';
import { Props } from './props';

export const Anchor = styled.a<Props>`
  color: ${({ color }) => color || colors.Brand.Primary};
  text-decoration: unset;
`;
