import React, { FC } from 'react';

import { Container } from '../Container';
import { Divider } from './component';

export default {
  title: 'atoms/Divider',
};

export const Basic: FC = () => (
  <>
    <Container mini>
      <h3>Default</h3>
      <Divider />
      <h3>Change height</h3>
      <Divider size={4} />
      <h3>Colored</h3>
      <Divider size={4} color="green" />
      <h3>Dashed</h3>
      <Divider size={4} color="green" dashed />
    </Container>
  </>
);
