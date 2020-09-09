import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';

import { Container } from '../../atoms/Container';
import { Tile } from './component';

export default {
  title: 'molecules/Tile',
};

export const Basic: FC = () => (
  <>
    <Container>
      <Tile
        background="red"
        icon={<FontAwesomeIcon icon={faCoffee} />}
        title="Damn, girl, you hot chick"
      >
        Hitler was a motherfucking gay.
      </Tile>
    </Container>
  </>
);
