import React, { FC } from 'react';

import { Container } from '../Container';
import { Paragraph } from '../Paragraph';
import { Section } from './component';

export default {
  title: 'atoms/Section',
};
export const Basic: FC = () => (
  <>
    <Container mini>
      <Section as="h2" title="Some title">
        <Paragraph>
          Now eldest new tastes plenty mother called misery get. Longer excuse for county nor except
          met its things. Narrow enough sex moment desire are. Hold who what come that seen read age
          its. Contained or estimable earnestly so perceived. Imprudence he in sufficient
          cultivated. Delighted promotion improving acuteness an newspaper offending he. Misery in
          am secure theirs giving an. Design on longer thrown oppose am.
        </Paragraph>
      </Section>
    </Container>
  </>
);
