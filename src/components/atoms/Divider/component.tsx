import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { colors } from '../../../core';
import { Props } from './props';

export const Divider = styled.hr<Props>`
  ${({ color, size, dashed }) => css`
    display: block;
    margin: 0;
    border: 0;
    background: transparent;
    width: 100%;
    height: 0;
    border-bottom: ${size || 1}px ${dashed ? 'dashed' : 'solid'} ${color || colors.Background.Grey};
  `}
`;
