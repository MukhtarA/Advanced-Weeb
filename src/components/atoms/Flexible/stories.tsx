/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { FC } from 'react';

import { Container } from '../Container';
import { Flexible } from './component';

export default {
  title: 'atoms/Flexible',
};

export const Basic: FC = () => (
  <React.Fragment>
    <Container>
      <h2>Flexible block</h2>
      <Flexible css={{ height: 30 }}>
        <div css={{ background: 'yellow', flex: 1, height: '100%' }} />
        <div css={{ background: 'green', flex: 1, height: '100%' }} />
      </Flexible>
    </Container>
  </React.Fragment>
);
