import React, { FC, useState } from 'react';

import { colors } from '../../../core';
import { Container } from '../Container';
import { Button } from './component';

export default {
  title: 'atoms/Button',
};

export const Basic: FC = () => {
  const [count, setCount] = useState(0);
  function handleCounter(): void {
    setCount(count + 1);
  }
  return (
    <>
      <Container mini>
        <h1>Button</h1>
        <Button className="mr-2" onClick={handleCounter} disableBorder>
          Default ({count})
        </Button>
        <Button
          className="mr-2"
          onClick={handleCounter}
          color={colors.Text.Light}
          background={colors.Brand.Primary}
          disableBorder
        >
          Primary ({count})
        </Button>
        <Button
          className="mr-2"
          onClick={handleCounter}
          color={colors.Text.Light}
          background={colors.Brand.Secondary}
          disableBorder
        >
          Secondary ({count})
        </Button>
        <Button
          className="mr-2"
          onClick={handleCounter}
          color={colors.Text.Dark}
          background={colors.Background.White}
        >
          White with border ({count})
        </Button>
      </Container>
    </>
  );
};
