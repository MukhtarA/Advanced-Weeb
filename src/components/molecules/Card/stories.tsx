import classNames from 'classnames';
import React, { FC } from 'react';

import { Container } from '../../atoms/Container';
import { Card } from './component';

export default {
  title: 'molecules/Card',
};

export const Basic: FC = () => (
  <React.Fragment>
    <Container mini>
      <h2>Card</h2>
      <Card className={classNames('p-4', 'mb-2')}>
        <p>
          <h2>Default</h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum
        </p>
      </Card>
      <Card disableBorder className={classNames('p-4', 'mb-2')}>
        <h2>Disable border</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum
        </p>
      </Card>
      <Card disableBorder color="#fff" background="#282828" className={classNames('p-4', 'mb-2')}>
        <h2>Coloring</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum
        </p>
      </Card>
    </Container>
  </React.Fragment>
);
