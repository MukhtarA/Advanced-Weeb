/** @jsx jsx */
import { jsx } from '@emotion/core';
import classNames from 'classnames';
import React, { FC } from 'react';

import { Container } from '../../atoms/Container';
import { Avatar } from './component';

export default {
  title: 'molecules/Avatar',
};

export const Basic: FC = () => (
  <React.Fragment>
    <Container mini>
      <h2 className="text-left">Avatar</h2>
      <div className={classNames('d-inline-block', 'ml-2')} css={{ width: 150 }}>
        <Avatar url="https://www.barcamania.com/sites/default/files/no_avatar.jpg" />
      </div>
      <div className={classNames('d-inline-block', 'ml-2')} css={{ width: 100 }}>
        <Avatar url="https://www.barcamania.com/sites/default/files/no_avatar.jpg" />
      </div>
      <div className={classNames('d-inline-block', 'ml-2')} css={{ width: 50 }}>
        <Avatar url="https://www.barcamania.com/sites/default/files/no_avatar.jpg" />
      </div>
    </Container>
  </React.Fragment>
);
