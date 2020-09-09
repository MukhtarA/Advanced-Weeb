import React, { FC } from 'react';

import { colors } from '../../../core';
import { Container } from '../Container';
import { Anchor } from './component';

export default {
  title: 'atoms/Anchor',
};

export const Basic: FC = () => (
  <>
    <Container mini>
      <h1>Anchors</h1>
      <h2>Default</h2>
      <Anchor href="#home">Home link</Anchor>
      <h2>Colored</h2>
      <Anchor href="#contact" color={colors.Text.Dark}>
        Contact
      </Anchor>
    </Container>
  </>
);
