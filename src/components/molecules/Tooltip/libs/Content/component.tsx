import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba/dist';

import { colors } from '../../../../../core';

const alpha = 0.8;

export const Content = styled.div`
  color: ${colors.Text.Light};
  background-color: ${rgba(colors.Background.Black, alpha)};
  padding: 10px;
  border-radius: 5px;
`;
