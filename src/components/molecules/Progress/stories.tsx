import React, { FC } from 'react';

import { colors } from '../../../core';
import { Container } from '../../atoms/Container';
import { Progress } from './component';

export default {
  title: 'molecules/Progress',
};

export const Basic: FC = () => (
  <>
    <Container mini>
      <h2>Progress</h2>
      <h2 className="mb-4 mt-4">Default</h2>
      <Progress progress={20} />
      <h2 className="mb-4 mt-4">Height 20px</h2>
      <Progress progress={40} height="20px" fillColor={colors.Brand.Secondary} />
      <h2 className="mb-4 mt-4">Background color</h2>
      <Progress progress={60} height="40px" fillColor="red" />
    </Container>
  </>
);
