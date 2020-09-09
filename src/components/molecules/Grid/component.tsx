import styled from '@emotion/styled';

import { Props } from './props';

export const Grid = styled.div<Props>`
  ${({ columns, gap }) => `
    display: grid;
    grid-template-columns: repeat(${columns}, minmax(auto, 1fr));
    ${gap && `grid-gap: ${gap};`}
  `}
`;
