import { render } from '@testing-library/react';
import { pipe } from 'fp-ts/pipeable';
import React from 'react';

import { colors, helpers } from '../../../core';
import { Progress } from './component';

describe('atoms/Progress', () => {
  it('should be default', () => {
    expect.assertions(2);
    render(<Progress progress={13} id="component" />);

    pipe(
      document.getElementById('component'),
      (component) => window.getComputedStyle(component as Element),
      (styles) => expect(styles.height).toBe('3px'),
    );

    pipe(
      document.querySelector('#component div'),
      (component) => window.getComputedStyle(component as Element),
      (styles) => expect(styles.width).toBe('13%'),
    );
  });

  it('should match props', () => {
    expect.assertions(4);
    render(
      <Progress
        progress={45}
        height="5px"
        color={colors.Background.Secondary}
        fillColor={colors.Brand.Primary}
        id="component"
      />,
    );

    pipe(
      document.getElementById('component'),
      (component) => window.getComputedStyle(component as Element),
      (styles) =>
        pipe(
          styles,
          () => expect(styles.height).toBe('5px'),
          () => expect(styles.backgroundColor).toBe(helpers.hexToRgb(colors.Background.Secondary)),
        ),
    );

    pipe(
      document.querySelector('#component div'),
      (component) => window.getComputedStyle(component as Element),
      (styles) =>
        pipe(
          styles,
          () => expect(styles.width).toBe('45%'),
          () => expect(styles.backgroundColor).toBe(helpers.hexToRgb(colors.Brand.Primary)),
        ),
    );
  });
});
