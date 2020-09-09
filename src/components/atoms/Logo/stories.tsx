import React, { FC } from 'react';

import { colors } from '../../../core';
import { Card } from '../../molecules/Card';
import { Anchor } from '../Anchor';
import { Container } from '../Container';
import { Flexible } from '../Flexible';
import { Logo } from './component';

export default {
  title: 'atoms/Logo',
};

export const Basic: FC = () => (
  <>
    <Card className="py-4">
      <Container>
        <Flexible>
          <Logo className="d-block" />
          <nav>
            <Anchor href="#home" color={colors.Text.Grey}>
              Home
            </Anchor>
          </nav>
        </Flexible>
      </Container>
    </Card>
  </>
);
