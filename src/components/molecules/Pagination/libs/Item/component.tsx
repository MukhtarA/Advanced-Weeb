import styled from '@emotion/styled';

import { colors } from '../../../../../core';
import { ButtonAnchor } from '../../../../atoms/ButtonAnchor';
import { Props } from './props';

export const Item = styled(ButtonAnchor)<Props>`
  ${({ active }) =>
    active
      ? `
    background: ${colors.Background.Secondary};
    color: ${colors.Text.Light};
  `
      : `
    background: ${colors.Background.Grey};
    color: ${colors.Text.Dark};
  `}
  padding: 7px 15px;
  margin: 5px 0;
  border-radius: 100px;
  cursor: pointer;
  box-shadow: none;
  transition: background 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s;
  &:hover {
    background: ${colors.Background.Secondary};
    color: ${colors.Text.Light};
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }
`;
