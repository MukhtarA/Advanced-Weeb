import styled from '@emotion/styled';

import { Props } from './props';

export const Item = styled.div<Props>`
  ${({ columns, rowColumns }) => `
    grid-column-start: span ${rowColumns ? columns / rowColumns : columns};
    grid-column-end: span ${rowColumns ? columns / rowColumns : columns};
  `}
`;
