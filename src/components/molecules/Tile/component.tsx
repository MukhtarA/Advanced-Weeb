import styled from '@emotion/styled';
import React, { FC } from 'react';

import { Heading } from '../../atoms/Heading';
import { Paragraph } from '../../atoms/Paragraph';
import { Props } from './props';

const TileBase: FC<Props> = ({ icon, title, children, ...rest }: Props) => (
  <div {...rest}>
    {icon}
    <Heading as="h2">{title}</Heading>
    <Paragraph>{children}</Paragraph>
  </div>
);

export const Tile = styled(TileBase)``;
