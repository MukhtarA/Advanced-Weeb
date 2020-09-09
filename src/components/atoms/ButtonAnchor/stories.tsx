import React, { FC } from 'react';

import { colors } from '../../../core';
import { Anchor } from '../Anchor';
import { Container } from '../Container';
import { Flexible } from '../Flexible';
import { ButtonAnchor } from './component';

export default {
  title: 'atoms/ButtonAnchor',
};

export const Basic: FC = () => (
  <>
    <Container mini>
      <Flexible className="align-items-start">
        <div className="col">
          <h1>Anchors</h1>
          <h2>Default</h2>
          <Anchor href="#home">Home link</Anchor>
          <h2>Colored</h2>
          <Anchor href="#contact" color={colors.Text.Dark}>
            Contact
          </Anchor>
        </div>
        <div className="col">
          <h1>ButtonAnchors</h1>
          <h2>Default</h2>
          <ButtonAnchor>Home link</ButtonAnchor>
          <h2>Colored</h2>
          <ButtonAnchor color={colors.Text.Dark}>Contact</ButtonAnchor>
        </div>
      </Flexible>
    </Container>
  </>
);
