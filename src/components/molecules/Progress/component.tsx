import styled from '@emotion/styled';
import React, { FC } from 'react';

import { colors } from '../../../core';
import { Line } from './libs/Line';
import { Props } from './props';

const ProgressBase: FC<Props> = ({ progress, fillColor, ...rest }: Props) => (
  <div {...rest}>
    <Line progress={progress} fillColor={fillColor} />
  </div>
);

export const Progress = styled(ProgressBase)`
  ${({ color, height }) => `
      height: ${height || '3px'};
      overflow: hidden;
      background-color: ${color || colors.Background.Grey};
      position: relative;
  `}
`;
