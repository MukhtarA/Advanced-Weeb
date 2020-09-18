import classNames from 'classnames';
import React, { FC } from 'react';

import { Container } from '../../atoms/Container';
import { Heading } from '../../atoms/Heading';
import { Card } from '../../molecules/Card';
import { Header } from './Header';
import { ToDoList } from './ToDoList/component';

export default {
  title: 'Assignments/A2',
};

export const Basic: FC = () => (
  <>
    <Header logo="ToDo List" />
    <Container mini>
      <Card className={classNames('p-4', 'mt-3')} disableBorder>
        <Heading as="h1" css={{ fontWeight: 'normal' }}>
          ToDo List
        </Heading>
        <ToDoList />
      </Card>
    </Container>
  </>
);
