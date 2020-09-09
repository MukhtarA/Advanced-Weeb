import styled from '@emotion/styled';

import { colors } from '../../../core';
import { Props } from './props';

export const Logo = styled.span<Props>`
  display: inline-block;
  font-family: 'Noto Serif', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
  color: ${({ color }) => color};
`;

Logo.defaultProps = {
  color: colors.Brand.Secondary,
  children: 'Inhalt',
};
