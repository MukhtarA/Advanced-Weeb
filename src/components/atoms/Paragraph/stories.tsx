import React, { FC } from 'react';

import { colors } from '../../../core';
import { Container } from '../../atoms/Container';
import { Paragraph } from './component';

export default {
  title: 'atoms/Paragraph',
};

export const Basic: FC = () => (
  <>
    <Container mini>
      <h1>Paragraph</h1>
      <h2>Default</h2>
      <Paragraph>
        Now eldest new tastes plenty mother called misery get. Longer excuse for county nor except
        met its things. Narrow enough sex moment desire are. Hold who what come that seen read age
        its. Contained or estimable earnestly so perceived. Imprudence he in sufficient cultivated.
        Delighted promotion improving acuteness an newspaper offending he. Misery in am secure
        theirs giving an. Design on longer thrown oppose am.
      </Paragraph>
      <h2>Colored</h2>
      <Paragraph color={colors.Brand.Primary}>
        Silent sir say desire fat him letter. Whatever settling goodness too and honoured she
        building answered her. Strongly thoughts remember mr to do consider debating. Spirits
        musical behaved on we he farther letters. Repulsive he he as deficient newspaper dashwoods
        we. Discovered her his pianoforte insipidity entreaties. Began he at terms meant as fancy.
        Breakfast arranging he if furniture we described on. Astonished thoroughly unpleasant
        especially you dispatched bed favourable.
      </Paragraph>
    </Container>
  </>
);
