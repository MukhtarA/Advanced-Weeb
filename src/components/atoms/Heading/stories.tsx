import classNames from 'classnames';
import React, { FC } from 'react';

import { colors } from '../../../core';
import { Card } from '../../molecules/Card';
import { Container } from '../Container';
import { Heading } from './component';

export default {
  title: 'atoms/Heading',
};

export const Basic: FC = () => (
  <>
    <Container mini>
      <h1>Heading</h1>
      <Card className={classNames('p-4')}>
        <Heading className={classNames('mb-2', 'w-100')} as="h1">
          h1
        </Heading>
        <Heading className={classNames('mb-2', 'w-100')} as="h2">
          h2
        </Heading>
        <Heading className={classNames('mb-2', 'w-100')} as="h3">
          h3
        </Heading>
        <Heading className={classNames('mb-2', 'w-100')} as="h3">
          h3
        </Heading>
        <Heading className={classNames('mb-2', 'w-100')} as="h4">
          h4
        </Heading>
        <Heading className={classNames('mb-2', 'w-100')} as="h5">
          h5
        </Heading>
        <Heading className={classNames('mb-2', 'w-100')} as="span">
          Span
        </Heading>
        <Heading className={classNames('mb-2', 'w-100')} as="h4" color={colors.Brand.Primary}>
          Colored
        </Heading>
      </Card>
    </Container>
  </>
);
