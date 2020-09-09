import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { colors } from '../../../core';
import { Props } from './props';

export const Button = styled.button<Props>`
  ${({ color, background, disableBorder }) =>
    css`
      color: ${color};
      background: ${background};
      font-family: inherit;
      font-weight: 600;
      font-size: 16px;
      border-radius: 100px;
      padding: 10px 15px;
      border: none;
      box-shadow: ${disableBorder || `0 0 0 2px`};
    `}
`;

Button.defaultProps = {
  color: colors.Text.Dark,
  background: colors.Background.Grey,
};
