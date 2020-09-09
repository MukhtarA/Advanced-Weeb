import { render } from '@testing-library/react';
import React from 'react';

import { colors, helpers } from '../../../core';
import { Card } from './component';

describe('atoms/Card', () => {
  it('should be default', () => {
    expect.assertions(3);
    render(<Card id="component" />);

    const component = document.getElementById('component');
    const styles = window.getComputedStyle(component as Element);

    expect(styles.backgroundColor).toBe(helpers.hexToRgb(colors.Text.Light));
    expect(styles.color).toBe(helpers.hexToRgb(colors.Text.Dark));
    expect(styles.border).toBe(`1px solid ${colors.Background.Grey}`);
  });

  it('shouldn\t have border and be colored', () => {
    expect.assertions(3);
    render(
      <Card
        id="component"
        disableBorder
        color={colors.Text.Light}
        background={colors.Background.Black}
      />,
    );

    const component = document.getElementById('component');
    const styles = window.getComputedStyle(component as Element);

    expect(styles.backgroundColor).toBe(helpers.hexToRgb(colors.Background.Black));
    expect(styles.color).toBe(helpers.hexToRgb(colors.Text.Light));
    expect(styles.border).toBe('');
  });
});
