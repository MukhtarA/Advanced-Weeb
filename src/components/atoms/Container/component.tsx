import styled from '@emotion/styled';

import { Props } from './props';
import { Sizes } from './types/Sizes';

export const Container = styled.div<Props>`
  position: relative;
  max-width: ${({ mini }) => (mini ? Sizes.small : Sizes.large)}px;
  margin: auto;
`;
