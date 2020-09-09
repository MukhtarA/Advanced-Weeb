import styled from '@emotion/styled';

import { Props } from './props';

export const Paragraph = styled.p<Props>`
  color: ${({ color }) => `${color || 'inherit'}`};
  line-height: 1.3;
  font-size: 15px;
  margin: 0;
`;
