/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, ReactNode, useState } from 'react';

import { Button } from '../../../atoms/Button';
import { Flexible } from '../../../atoms/Flexible';
import { Card } from '../../../molecules/Card';
import { Props } from './props';

const ToDoListBase: FC<Props> = ({ children, ...rest }: Props) => {
  const [activeItems, setActiveItems] = useState<ReadonlyArray<ReactNode>>([]);
  const toggleActiveItems = (line: ReactNode): void => {
    setActiveItems(activeItems.concat(line));
  };
  /*    const [activeValues, setActiveValues] = useState<ReadonlyArray<string>>([]);
    const toggleActiveValues = (line: string): void => {
        setActiveValues(activeValues.concat(line));
    };*/
  return (
    <div {...rest}>
      <Flexible>
        <input
          placeholder="   New Task"
          css={{
            flex: 2,
            marginRight: '30px',
            marginLeft: '30px',
            height: '35px',
            borderRadius: '5px',
            border: '1px solid gray',
          }}
        >
          {children}
        </input>
        <Button
          onClick={() => toggleActiveItems('test')}
          disableBorder
          css={{ height: '35px', borderRadius: '5px', color: 'white', background: 'blue' }}
        >
          Add
        </Button>
      </Flexible>
      <div css={{ marginTop: '30px' }}>
        {activeItems.map((n, i) => (
          <Card key={i}>
            <Flexible>
              <div css={{ padding: '10px' }}>
                <input css={{ marginRight: '80px' }} type="checkbox" />
                <span css={{ marginRight: '380px' }}>{n}</span>
                <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} />
              </div>
            </Flexible>
          </Card>
        ))}
      </div>
    </div>
  );
};

export const ToDoList = styled(ToDoListBase)`
  padding: 20px 0;
`;
