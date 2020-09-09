import styled from '@emotion/styled';
import { createElement, FC } from 'react';

import { Props } from './props';

const HeadingBase: FC<Props> = ({ as, children, ...rest }: Props) =>
  createElement(as, rest, children);

export const Heading = styled(HeadingBase)`
  ${({ color }) => `
    color: ${color || 'inherit'};
    margin: 0;
    padding: 0;
    display: block;
  `}
`;
