/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { FC } from 'react';

import { Container } from '../../../atoms/Container';
import { Props } from './props';

const HeaderBase: FC<Props> = ({ logo, ...rest }: Props) => {
  return (
    <header {...rest}>
      <Container>
        <h2 css={{ marginLeft: '30px' }}>{logo}</h2>
      </Container>
    </header>
  );
};

export const Header = styled(HeaderBase)`
  background: #282828;
  color: gray;
  padding: 20px 0;
`;
